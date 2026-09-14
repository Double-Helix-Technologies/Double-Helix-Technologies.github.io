import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  // The second element is the selector for the dark class. It used to be the literal 'class',
  // which made Tailwind emit `:is(class *)` for every dark: utility, a selector that matches
  // nothing; the dark theme only worked through the CSS variables in globals.css.
  darkMode: ['class', '.dark'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: [
  				'var(--font-inter)',
  				'sans-serif'
  			],
  			heading: [
  				'var(--font-outfit)',
  				'sans-serif'
  			]
  		},
  		colors: {
  			primary: 'var(--primary)',
  			'primary-dark': 'var(--primary-dark)',
  			'text-primary': 'var(--text-primary)',
  			'text-secondary': 'var(--text-secondary)',
  			background: 'var(--background)',
  			'background-alt': 'var(--background-alt)',
  			border: 'var(--border)',
  			// Opacity modifiers (border-border/40) do not work on var() colours in Tailwind 3 and silently
  			// fall back to the preflight default. Use this token for hairline rules instead.
  			divider: 'var(--divider)',
  			'accent-primary': 'var(--accent-primary)',
				'accent-pink': 'var(--accent-comfort-pink)',
				'accent-teal': 'var(--accent-science-teal)',
				'accent-lilac': 'var(--accent-novel-lilac)',
				'accent-blue': 'var(--accent-digital-blue)',
  		},
  		animation: {
  			'fade-in': 'fadeIn 1s ease-in-out',
  			'slide-up': 'slideUp 0.5s ease-in-out',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
				'icon-rotate': 'accordion-icon-rotate 0.2s ease-out forwards',
				'float': 'float 2s ease-in-out infinite',
				// Mesh gradient fields in the hero: a slow wander, never a bounce.
				'drift': 'drift 24s ease-in-out infinite'
  		},
  		keyframes: {
				drift: {
					'0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
					'50%': { transform: 'translate3d(4%, -6%, 0) scale(1.08)' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-8px)' },
				},
  			fadeIn: {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			slideUp: {
  				'0%': {
  					transform: 'translateY(20px)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: '1'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  		}
  	}
  },
  plugins: [
    // `can-hover:` applies only on devices with a real hover (mouse, trackpad). Touch devices skip it,
    // so anything that is revealed on hover must also have a non-hover fallback.
    plugin(({ addVariant }) => {
      addVariant('can-hover', '@media (hover: hover)');
    })
  ],
};

export default config; 