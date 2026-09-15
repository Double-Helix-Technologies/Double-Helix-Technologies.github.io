'use client';

import { useId, useMemo } from 'react';
import { Particles, ParticlesProvider, type ParticlesPluginRegistrar } from '@tsparticles/react';
import type { ISourceOptions } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

/**
 * Sparkles after ui-layouts (https://www.ui-layouts.com/components/sparkles), adapted to
 * @tsparticles/react 4 (ParticlesProvider + Particles) and the tsparticles 4 option schema, where
 * the particle colour lives under `particles.paint.color` rather than `particles.color`. Renders a
 * transparent canvas of slowly drifting, twinkling dots inside its own box; position and mask it
 * from the parent.
 */

interface SparklesProps {
  className?: string;
  size?: number;
  minSize?: number | null;
  density?: number;
  speed?: number;
  minSpeed?: number | null;
  opacity?: number;
  direction?: 'none' | 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  opacitySpeed?: number;
  minOpacity?: number | null;
  color?: string;
  mousemove?: boolean;
  hover?: boolean;
  background?: string;
  options?: ISourceOptions;
}

/** Module-level so the provider's init callback is stable across renders, as the library requires. */
const initEngine: ParticlesPluginRegistrar = async (engine) => {
  await loadSlim(engine);
};

export function Sparkles({
  className,
  size = 1.2,
  minSize = null,
  density = 800,
  speed = 1.5,
  minSpeed = null,
  opacity = 1,
  direction = 'none',
  opacitySpeed = 3,
  minOpacity = null,
  color = '#ffffff',
  mousemove = false,
  hover = false,
  background = 'transparent',
  options
}: SparklesProps) {
  const id = useId();

  const particleOptions = useMemo<ISourceOptions>(
    () => ({
      background: { color: { value: background } },
      fullScreen: { enable: false, zIndex: 1 },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: { enable: false, mode: 'push' },
          onHover: { enable: hover, mode: 'grab', parallax: { enable: mousemove, force: 60, smooth: 10 } },
          resize: { enable: true }
        },
        modes: { push: { quantity: 4 }, repulse: { distance: 200, duration: 0.4 } }
      },
      particles: {
        paint: { color: { value: color } },
        move: {
          enable: true,
          direction,
          speed: { min: minSpeed ?? speed / 130, max: speed },
          straight: false
        },
        collisions: { enable: false },
        number: { value: density },
        opacity: {
          value: { min: minOpacity ?? opacity / 10, max: opacity },
          animation: { enable: true, sync: false, speed: opacitySpeed }
        },
        size: { value: { min: minSize ?? size / 1.5, max: size } }
      },
      detectRetina: true,
      ...options
    }),
    [background, hover, mousemove, color, direction, minSpeed, speed, density, minOpacity, opacity, opacitySpeed, minSize, size, options]
  );

  return (
    <ParticlesProvider init={initEngine}>
      <Particles id={id} options={particleOptions} className={className} />
    </ParticlesProvider>
  );
}
