import Image from 'next/image';

export default function LiaaInfo() {
  return (
    <section className="section pt-16 pb-0">
      <div className="container-tight">
        <div className="mx-auto max-w-3xl px-6 py-10 text-center">
          <p className="mx-auto max-w-2xl text-text-secondary">
            Double Helix Technologies SIA has entered into Export Support Agreement No. 9.3&#8209;1&#8209;L&#8209;2025/254 with the Investment and Development Agency of Latvia.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-6 md:flex-row md:gap-4">
            <div className="flex flex-col items-center">
              <Image
                src="/images/eu-flag.png"
                alt="European Union flag"
                width={147}
                height={98}
                className="h-auto w-full max-w-[147px]"
              />
              <p className="mt-3 text-sm text-text-secondary">Financed by European Union</p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/nap-logo.png"
                alt="NAP 2027 logo"
                width={153}
                height={127}
                className="h-auto w-full max-w-[153px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
