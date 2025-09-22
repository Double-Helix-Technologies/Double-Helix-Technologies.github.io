"use client"

export default function Contact() {
  return (
    <div id="contact" className="section bg-background">
      <div className="container-tight">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-text-primary mb-6">Ready to move from ideas to outcomes?</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Tell us where it hurts. We’ll suggest a right‑sized way forward.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-background-alt p-8 md:p-10 rounded-2xl text-center">
            <a
              href="mailto:hello@doublehelix.dev"
              className="btn-primary inline-flex justify-center px-8 py-4"
            >
              Book an intro call
            </a>
            <p className="mt-6 text-text-secondary">
              Intro call (15–30 min)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 