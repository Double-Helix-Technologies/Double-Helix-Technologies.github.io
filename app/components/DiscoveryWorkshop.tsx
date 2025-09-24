import React from "react";

const DiscoveryWorkshop: React.FC = () => (
  <section className="bg-gradient-to-r from-indigo-600 to-accent-green text-white">
    <div className="mx-auto max-w-7xl px-4 py-12 md:py-16 grid md:grid-cols-12 gap-6 items-center">
      <div className="md:col-span-8 text-white/90">
        <h3 className="text-2xl font-semibold">Discovery Workshop — from ambiguity to a 90‑day plan</h3>
        <p className="mt-2">In 1–2 weeks we deliver a current‑state map, risks, and a 90‑day plan—so you can move with confidence.</p>
      </div>
      <div className="md:col-span-4 flex flex-col items-center">
        <a
            href="mailto:hello@doublehelix.dev?subject=Book%20a%20workshop"
            className="btn-primary inline-flex justify-center px-8 py-4"
        >
            Start a discovery workshop
        </a>
        <p className="text-xs text-white/80 mt-2">Structured 1–2 week engagement</p>
      </div>
    </div>
  </section>
);

export default DiscoveryWorkshop;
