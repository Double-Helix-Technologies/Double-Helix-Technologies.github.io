"use client";

import { Button } from '@/app/components/ui/button';

export default function PageBanner() {
  return (
    <section className="section container-tight flex flex-col items-start gap-10 mt-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-[.025em] animate-fade-in col-span-2 font-semibold text-transparent bg-clip-text bg-gradient-to-tr from-purple-500 via-blue-500 to-cyan-300 pb-2">
          {/*Transform complexity into clarity<br/>*/}
          Simplify IT.<br/>
          Amplify science.
        </h1>
        <p className="text-md text-text-secondary text-gray-400 col-span-1 ">
          We help businesses create a healthier, safer, and better organized world by solving IT challenges that matter.
          We grow businesses by building simple, secure, and adaptable solutions that scale as you go.
        </p>
      </div>
        <Button variant={'ghost'} className={'bg-background-alt hover:bg-gradient-to-tr bg-opacity-50 from-purple-500 to-blue-500'}> Book an intro call</Button>
    </section>
  );
}
