'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { CardSpotlight } from '@/app/components/ui/CardSpotlight';
import { Button } from '@/app/components/ui/button';
import type { Product } from '@/app/data/work';
import { getProductPath } from '@/app/data/work';
import type { CarouselApi } from '@/app/components/ui/carousel';
import { Carousel, CarouselContent, CarouselItem } from '@/app/components/ui/carousel';

type ProductsShowcaseProps = {
  products: Product[];
};

export default function ProductsShowcase({ products }: ProductsShowcaseProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  if (products.length === 0) {
    return null;
  }

  const itemClassName = products.length === 1 ? 'pl-2 basis-full' : 'pl-2 md:basis-1/2 xl:basis-1/3';

  return (
    <div className="mt-12 space-y-8">
      {products.length > 1 ? (
        <div className="flex justify-end">
          <div className="flex items-center gap-3">
            <Button
              type="button"
              variant="secondary"
              size="icon"
              className="bg-background/60 text-text-primary hover:bg-background disabled:opacity-40"
              onClick={() => api?.scrollPrev()}
              disabled={!api}
            >
              <ArrowLeft />
              <span className="sr-only">Previous product</span>
            </Button>
            <Button
              type="button"
              variant="secondary"
              size="icon"
              className="bg-background/60 text-text-primary hover:bg-background disabled:opacity-40"
              onClick={() => api?.scrollNext()}
              disabled={!api}
            >
              <ArrowRight />
              <span className="sr-only">Next product</span>
            </Button>
          </div>
        </div>
      ) : null}

      <Carousel
        setApi={setApi}
        opts={{
          align: 'start',
          loop: products.length > 1
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 py-2">
          {products.map((product) => (
            <CarouselItem key={product.slug} className={itemClassName}>
              <Link href={getProductPath(product)} className="block h-full">
                <CardSpotlight
                  className="h-full min-h-[280px] cursor-pointer border border-accent-science-teal/20 bg-accent-science-teal/10 p-6 transition-all duration-300"
                  color="rgba(2, 192, 186, 0.22)"
                >
                  <div className="relative z-20 flex h-full flex-col gap-5">
                    <div className="space-y-3">
                      <h3 className="text-2xl md:text-3xl">{product.name}</h3>
                      <p className="text-text-secondary">{product.preview}</p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-background/15 p-4 backdrop-blur-[2px]">
                      <p className="text-sm font-medium uppercase tracking-[0.18em] text-text-secondary">Availability</p>
                      <p className="mt-2 text-text-primary">{product.previewState}</p>
                    </div>

                    <div className="mt-auto inline-flex items-center gap-2 font-medium text-text-primary">
                      Open full product
                      <ArrowRight />
                    </div>
                  </div>
                </CardSpotlight>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {products.length > 1 ? (
        <div className="flex justify-center gap-2">
          {products.map((product, idx) => (
            <button
              key={product.slug}
              type="button"
              onClick={() => api?.scrollTo(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === current ? 'w-8 bg-accent-science-teal' : 'w-2 bg-border'
              }`}
              aria-label={`Go to product ${idx + 1}`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
