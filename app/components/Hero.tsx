import { Button } from '@/app/components/ui/button';

export default function Hero() {
  return (
    <section className="top-section">
      <div className="container-tight cols-span-1 flex flex-col items-start gap-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <h1
            className="text-5xl md:text-6xl lg:text-7xl tracking-[.025em] animate-fade-in duration-700 col-span-3 font-semibold text-transparent bg-clip-text bg-gradient-to-tr from-accent-pink via-accent-blue to-accent-teal pb-2">
            We make workflows clear<br/>
            and make them work better.
          </h1>
          <p className="text-lg col-start-1 col-span-1 md:col-span-2">
            We help life science and manufacturing companies understand how work moves across people, processes, and systems and improve execution by reducing risk and friction.
          </p>
        </div>
        <div className="flex flex-row gap-5">
          <Button variant="gradient">
            <a href="/#contact">
              Contact us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
