'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import OpsQuizShell from './OpsQuizShell';
import WelcomeStep from './WelcomeStep';
import QuestionStep from './QuestionStep';
import LeadCaptureStep from './LeadCaptureStep';
import EndingStep from './EndingStep';
import ThankYouStep from './ThankYouStep';
import EventCodeGate from './EventCodeGate';
import { QUESTIONS, getEndingForScore, QuestionOption } from '@/app/data/opsQuiz';
import { track } from '@/app/utils/analytics';
import { LeadData } from './LeadCaptureStep';
import { QUIZ_SUBMIT_ENDPOINT, SESSION_STORAGE_KEY } from './constants';

type Step = 'event-code' | 'welcome' | 'question' | 'lead-capture' | 'ending' | 'thank-you';

interface Answer {
  questionId: string;
  selectedOptionId: QuestionOption['id'];
  points: number;
}

interface QuizSubmissionPayload {
  startedAt: Date;
  completedAt: Date;
  answers: Answer[];
  totalScore: number;
  endingId: string;
  lead?: LeadData;
  softFollowUp?: { choice: string };
  eventCodeProof?: string;
}

const HIDE_PROGRESS_STEPS: Step[] = ['event-code', 'welcome', 'ending', 'lead-capture', 'thank-you'];

export default function OpsQuiz() {
  const [eventCodeProof, setEventCodeProof] = useState<string | null>(null);
  const [step, setStep] = useState<Step>('event-code');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [selectedOption, setSelectedOption] = useState<QuestionOption['id'] | null>(null);
  const [startedAt, setStartedAt] = useState<Date | null>(null);
  const [completedAt, setCompletedAt] = useState<Date | null>(null);
  const [leadData, setLeadData] = useState<LeadData | null>(null);
  const [softFollowUpChoice, setSoftFollowUpChoice] = useState<string | null>(null);

  useEffect(() => {
    const proof = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (proof) {
      setEventCodeProof(proof);
      setStep('welcome');
    }
  }, []);

  const handleEventCodeVerified = useCallback((proof: string) => {
    setEventCodeProof(proof);
    setStep('welcome');
  }, []);

  const resetQuiz = useCallback(() => {
    setStep('welcome');
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setSelectedOption(null);
    setStartedAt(null);
    setCompletedAt(null);
    setLeadData(null);
    setSoftFollowUpChoice(null);
  }, []);

  const currentQuestion = QUESTIONS[currentQuestionIndex];
  const totalSteps = QUESTIONS.length + 2;

  const getCurrentStepNumber = useCallback((): number => {
    if (step === 'event-code' || step === 'welcome') return 0;
    if (step === 'question') return currentQuestionIndex + 1;
    if (step === 'ending') return QUESTIONS.length + 1;
    if (step === 'lead-capture') return QUESTIONS.length + 2;
    if (step === 'thank-you') return QUESTIONS.length + 3;
    return totalSteps;
  }, [step, currentQuestionIndex, totalSteps]);

  const handleStart = useCallback(() => {
    setStartedAt(new Date());
    setStep('question');
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    track('quiz_started');
  }, []);

  const updateAnswer = useCallback((questionId: string, optionId: QuestionOption['id'], points: number) => {
    setAnswers((prev) => {
      const existingIndex = prev.findIndex((a) => a.questionId === questionId);
      const newAnswer: Answer = { questionId, selectedOptionId: optionId, points };

      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = newAnswer;
        return updated;
      }
      return [...prev, newAnswer];
    });
  }, []);

  const handleAnswerSelect = useCallback((optionId: QuestionOption['id']) => {
    if (!currentQuestion) return;

    const option = currentQuestion.options.find((opt) => opt.id === optionId);
    if (!option) return;

    setSelectedOption(optionId);
    updateAnswer(currentQuestion.id, optionId, option.points);

    track('quiz_question_answered', {
      questionId: currentQuestion.id,
      optionId,
      points: option.points,
    });
  }, [currentQuestion, updateAnswer]);

  const calculateTotalScore = useCallback((): number => {
    return answers.reduce((sum, a) => sum + a.points, 0);
  }, [answers]);

  const createSubmissionPayload = useCallback((
    lead?: LeadData,
    softFollowUp?: { choice: string }
  ): QuizSubmissionPayload => {
    const totalScore = calculateTotalScore();
    const ending = getEndingForScore(totalScore);

    return {
      startedAt: startedAt!,
      completedAt: completedAt || new Date(),
      answers,
      totalScore,
      endingId: ending.id,
      ...(lead && { lead }),
      ...(softFollowUp && { softFollowUp }),
      ...(eventCodeProof && { eventCodeProof }),
    };
  }, [answers, startedAt, completedAt, eventCodeProof, calculateTotalScore]);

  const handleNext = useCallback(() => {
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setCompletedAt(new Date());
      setStep('ending');
    }
  }, [currentQuestionIndex]);

  const handleBack = useCallback(() => {
    if (currentQuestionIndex > 0) {
      const prevIndex = currentQuestionIndex - 1;
      setCurrentQuestionIndex(prevIndex);
      const prevAnswer = answers.find((a) => a.questionId === QUESTIONS[prevIndex].id);
      setSelectedOption(prevAnswer?.selectedOptionId || null);
    }
  }, [currentQuestionIndex, answers]);

  const submitQuiz = useCallback(async (payload: QuizSubmissionPayload, trackCompletion = false) => {
    try {
      const serializedPayload = {
        ...payload,
        startedAt: payload.startedAt.toISOString(),
        completedAt: payload.completedAt.toISOString(),
      };

      const response = await fetch(QUIZ_SUBMIT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(serializedPayload),
      });

      if (response.ok && trackCompletion) {
        track('quiz_completed', {
          totalScore: payload.totalScore,
          endingId: payload.endingId,
        });
      }
    } catch (error) {
      console.error('Failed to submit quiz:', error);
    }
  }, []);

  const handleSoftFollowUp = useCallback((choice: string) => {
    setSoftFollowUpChoice(choice);
  }, []);

  const handleLeadSubmit = useCallback((lead: LeadData) => {
    setLeadData(lead);
    track('quiz_lead_submitted', lead);

    if (lead.email?.trim()) {
      const softFollowUp = softFollowUpChoice ? { choice: softFollowUpChoice } : undefined;
      submitQuiz(createSubmissionPayload(lead, softFollowUp), false);
    }

    setStep('thank-you');
  }, [createSubmissionPayload, softFollowUpChoice, submitQuiz]);

  const currentAnswer = currentQuestion
    ? answers.find((a) => a.questionId === currentQuestion.id)
    : null;
  const currentSelectedOption = currentAnswer?.selectedOptionId || selectedOption;

  const ending = (step === 'ending' || step === 'lead-capture') && completedAt
    ? getEndingForScore(calculateTotalScore())
    : null;

  return (
    <OpsQuizShell
      currentStep={getCurrentStepNumber()}
      totalSteps={totalSteps}
      showProgress={!HIDE_PROGRESS_STEPS.includes(step)}
    >
      <AnimatePresence mode="wait">
        {step === 'event-code' && (
          <EventCodeGate key="event-code" onCodeVerified={handleEventCodeVerified} />
        )}
        {step === 'welcome' && (
          <WelcomeStep key="welcome" onStart={handleStart} />
        )}
        {step === 'question' && currentQuestion && (
          <QuestionStep
            key={currentQuestion.id}
            question={currentQuestion}
            selectedOption={currentSelectedOption}
            onSelect={handleAnswerSelect}
            onNext={handleNext}
            onBack={handleBack}
            canGoBack={currentQuestionIndex > 0}
          />
        )}
        {step === 'ending' && ending && (
          <EndingStep
            key="ending"
            ending={ending}
            onSoftFollowUp={handleSoftFollowUp}
            onProceedToLeadCapture={() => setStep('lead-capture')}
          />
        )}
        {step === 'lead-capture' && (
          <LeadCaptureStep
            key="lead-capture"
            onSubmit={handleLeadSubmit}
            onSkip={() => setStep('thank-you')}
          />
        )}
        {step === 'thank-you' && (
          <ThankYouStep
            key="thank-you"
            onRestart={resetQuiz}
          />
        )}
      </AnimatePresence>
    </OpsQuizShell>
  );
}
