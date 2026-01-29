import { Button } from '@/app/components/ui/button';

export default function Hero() {
  return (
    <section className="top-section">
      <div className="container-tight cols-span-1 flex flex-col items-start gap-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <h1
            className="text-5xl md:text-6xl lg:text-7xl tracking-[.025em] animate-fade-in duration-700 col-span-3 font-semibold text-transparent bg-clip-text bg-gradient-to-tr from-purple-500 via-blue-500 to-cyan-300 pb-2">
            We make work flows clear<br/>
            and make them work better.
          </h1>
          <p className="text-xl col-start-1">
            We help you understand how work moves across people, processes, and systems and improve execution by reducing risk and friction.
          </p>
        </div>
        <div className="flex flex-row gap-5">
          <Button variant="gradient" size="lg">
            <a href="mailto:hello@doublehelix.dev?subject=Book%20a%20workshop">
              Book a workshop
            </a>
          </Button>
          <Button variant="secondary" size="lg">
            <a href="/#contact">Contact us</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
