"use client"

export default function Contact() {
  return (
    <div id="contact" className="section bg-background">
      <div className="container-tight">
        <div className="mb-16 text-center">
          <span className="text-sm font-medium text-primary mb-2 inline-block">Contact Us</span>
          <h2 className="text-4xl md:text-5xl font-semibold text-text-primary mb-6">Get in touch</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            We'd love to hear from you. <br/>Click the button below to send us an email and we'll respond as soon as possible.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-background-alt p-8 md:p-10 rounded-2xl text-center">
            <a
              href="mailto:aleksandrs.gusevs@doublehelix.dev"
              className="btn-primary inline-flex justify-center px-8 py-4"
            >
              Send us an email
            </a>
            <p className="mt-6 text-text-secondary">
              Or email us directly at:{" "}
              <a 
                href="mailto:aleksandrs.gusevs@doublehelix.dev"
                className="text-primary hover:underline"
              >
                aleksandrs.gusevs@doublehelix.dev
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 