'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import OpsQuizShell from './OpsQuizShell';
import WelcomeStep from './WelcomeStep';
import QuestionStep from './QuestionStep';
import LeadCaptureStep from './LeadCaptureStep';
import EndingStep from './EndingStep';
import EventCodeGate from './EventCodeGate';
import { QUESTIONS, getEndingForScore, QuestionOption } from '@/app/data/opsQuiz';
import { track } from '@/app/utils/analytics';
import { LeadData } from './LeadCaptureStep';
import { QUIZ_SUBMIT_ENDPOINT, SESSION_STORAGE_KEY } from './constants';

type Step = 'event-code' | 'welcome' | 'question' | 'lead-capture' | 'ending';

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

export default function OpsQuiz() {
  const [eventCodeProof, setEventCodeProof] = useState<string | null>(null);
  const [step, setStep] = useState<Step>('event-code');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [selectedOption, setSelectedOption] = useState<QuestionOption['id'] | null>(null);
  const [startedAt, setStartedAt] = useState<Date | null>(null);
  const [completedAt, setCompletedAt] = useState<Date | null>(null);
  const [leadData, setLeadData] = useState<LeadData | null>(null);

  useEffect(() => {
    const proof = sessionStorage.getItem(SESSION_STORAGE_KEY);
    
    if (proof) {
      setEventCodeProof(proof);
      setStep('welcome');
    } else {
      setStep('event-code');
    }
  }, []);

  const handleEventCodeVerified = useCallback((proof: string) => {
    setEventCodeProof(proof);
    setStep('welcome');
  }, []);

  const currentQuestion = QUESTIONS[currentQuestionIndex];
  const totalSteps = QUESTIONS.length + 2;
  
  const currentStepNumber = 
    step === 'event-code' || step === 'welcome' ? 0 :
    step === 'question' ? currentQuestionIndex + 1 :
    step === 'lead-capture' ? QUESTIONS.length + 1 :
    totalSteps;

  const handleStart = useCallback(() => {
    setStartedAt(new Date());
    setStep('question');
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    track('quiz_started');
  }, []);

  const handleAnswerSelect = useCallback((optionId: QuestionOption['id']) => {
    if (!currentQuestion) return;

    const option = currentQuestion.options.find((opt) => opt.id === optionId);
    if (!option) return;

    setSelectedOption(optionId);

    setAnswers((prev) => {
      const existingIndex = prev.findIndex((a) => a.questionId === currentQuestion.id);
      const newAnswer: Answer = {
        questionId: currentQuestion.id,
        selectedOptionId: optionId,
        points: option.points,
      };

      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = newAnswer;
        return updated;
      }
      return [...prev, newAnswer];
    });

    track('quiz_question_answered', {
      questionId: currentQuestion.id,
      optionId,
      points: option.points,
    });
  }, [currentQuestion]);

  const handleNext = useCallback(() => {
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setStep('lead-capture');
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
      completedAt: new Date(),
      answers,
      totalScore,
      endingId: ending.id,
      ...(lead && { lead }),
      ...(softFollowUp && { softFollowUp }),
      ...(eventCodeProof && { eventCodeProof }),
    };
  }, [answers, startedAt, eventCodeProof, calculateTotalScore]);

  const handleLeadSubmit = useCallback((lead: LeadData) => {
    setLeadData(lead);
    track('quiz_lead_submitted', lead);
    
    const completed = new Date();
    setCompletedAt(completed);
    setStep('ending');

    submitQuiz(createSubmissionPayload(lead), true);
  }, [createSubmissionPayload]);

  const handleLeadSkip = useCallback(() => {
    const completed = new Date();
    setCompletedAt(completed);
    setStep('ending');

    submitQuiz(createSubmissionPayload(), true);
  }, [createSubmissionPayload]);

  const handleSoftFollowUp = useCallback((choice: string) => {
    if (completedAt && startedAt) {
      submitQuiz(createSubmissionPayload(leadData || undefined, { choice }));
    }
  }, [completedAt, startedAt, leadData, createSubmissionPayload]);

  const submitQuiz = async (payload: QuizSubmissionPayload, trackCompletion = false) => {
    try {
      const response = await fetch(QUIZ_SUBMIT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
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
  };

  const currentAnswer = currentQuestion
    ? answers.find((a) => a.questionId === currentQuestion.id)
    : null;
  const currentSelectedOption = currentAnswer?.selectedOptionId || selectedOption;

  const ending = step === 'ending' && completedAt
    ? getEndingForScore(calculateTotalScore())
    : null;

  return (
    <OpsQuizShell
      currentStep={currentStepNumber}
      totalSteps={totalSteps}
      showProgress={step !== 'event-code' && step !== 'welcome' && step !== 'ending'}
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
        {step === 'lead-capture' && (
          <LeadCaptureStep
            key="lead-capture"
            onSubmit={handleLeadSubmit}
            onSkip={handleLeadSkip}
          />
        )}
        {step === 'ending' && ending && (
          <EndingStep
            key="ending"
            ending={ending}
            onSoftFollowUp={handleSoftFollowUp}
          />
        )}
      </AnimatePresence>
    </OpsQuizShell>
  );
}
