"use client"

export default function Services() {
  const services = [
    {
      title: 'Integrations & Process Automation',
      description: 'Streamline your business operations through intelligent automation and system integration. Transform your workflows to prepare for the digital future. Get the most out of your resources.',
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },   
    {
      title: 'IT Consultancy',
      description: 'Strategic technology consulting to help you make informed decisions. We break down problems and map out business-smart, tech-driven paths to results.',
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      ),
    }, 
    {
      title: 'Software Development',
      description: 'Custom IT solutions tailored to your business needs, built with modern technologies and best practices. Secure, scalable, and simple.',
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      ),
    },
    {
      title: 'MVP Development',
      description: 'Rapid development of minimum viable products to validate your business ideas quickly. Get return on investment faster.',
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
        </svg>
      ),
    },
  ];

  return (
    <div id="services" className="section bg-background">
      <div className="container-tight">
        <div className="text-center mb-20">
          <span className="inline-block text-sm font-medium text-primary mb-2">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-semibold text-text-primary mb-6">
            Transforming Complexity into Clarity
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            We provide comprehensive solutions to help you streamline your business process and get the most out of your resources.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="bg-background-alt p-8 rounded-2xl transition-all hover:shadow-lg"
            >
              <div className="h-14 w-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-text-secondary">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 