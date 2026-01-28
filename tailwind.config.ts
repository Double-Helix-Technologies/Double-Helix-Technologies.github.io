import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class', 'class'],
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
  			'accent-primary': 'var(--accent-primary)',
  			'accent-green': 'var(--accent-green)',
				'gradient-accent': 'var(--gradient-accent)',
  		},
  		animation: {
  			'fade-in': 'fadeIn 1s ease-in-out',
  			'slide-up': 'slideUp 0.5s ease-in-out',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
				'icon-rotate': 'accordion-icon-rotate 0.2s ease-out forwards',
				'float': 'float 2s ease-in-out infinite'
  		},
  		keyframes: {
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
  plugins: [],
};

export default config; 