"use client"

export default function About() {
  const team = [
    {
      name: 'Armands',
      role: 'CEO',
      description: 'Dude',
    },
    {
      name: 'Māris',
      role: 'CTO',
      description: 'Dude',
    },
    {
      name: 'Aleksandrs',
      role: 'CBDO',
      description: 'Dude',
    },
    {
      name: 'Valts',
      role: 'CIO',
      description: 'Dude',
    },
    {
      name: 'Aleksandra',
      role: 'COO',
      description: 'Dudette',
    }
  ];

  return (
    <div id="about" className="section bg-background-alt">
      <div className="container-tight">
        <div className="mb-16 text-center">
          <span className="text-sm font-medium text-primary mb-2 inline-block">About Us</span>
          <h2 className="text-4xl md:text-5xl font-semibold text-text-primary mb-6">Meet our team</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            We are a newly formed IT consultancy company based in Latvia, bringing together experienced professionals across engineering, business development, and strategic operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((person) => (
            <div 
              key={person.name} 
              className="bg-background p-6 rounded-2xl transition-all hover:shadow-lg"
            >
              <div className="flex items-center mb-5">
                <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-2xl font-semibold text-white">{person.name[0]}</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-text-primary">{person.name}</h3>
                  <p className="text-primary text-sm font-medium">{person.role}</p>
                </div>
              </div>
              <p className="text-text-secondary">{person.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 