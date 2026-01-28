"use client"

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-tight">
        <div className="mb-4 text-center">
          <h2 className="text-3xl md:text-4xl text-text-primary mb-4">Ready to move from ideas to outcomes?</h2>
          <p className="text-md text-text-secondary max-w-2xl mx-auto">
            Tell us where it hurts. We’ll suggest a right‑sized way forward.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="bp-8 md:p-10 rounded-2xl text-center">
            <a
              href="mailto:hello@doublehelix.dev?subject=Book%20an%20intro%20call"
              className="btn-primary inline-flex justify-center"
            >
              Book an intro call
            </a>
            <p className="mt-6 text-text-secondary">
              Intro call (15–30 min)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 