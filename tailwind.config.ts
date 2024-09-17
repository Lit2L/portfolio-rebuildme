import type { Config } from 'tailwindcss'

//@ts-ignore
import { default as flattenColorPalette } from 'tailwindcss/lib/util/flattenColorPalette'
import svgToDataUri from 'mini-svg-data-uri'
const colors = require('tailwindcss/colors')

module.exports = {
	darkMode: ['class'],
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			animation: {
				moveUp: 'moveUp 1.4s ease forwards',
				appear: 'appear 1s 1s forwards',
				fill: 'fill 1s forwards',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'marquee-horizontal': 'marquee-x var(--duration) infinite linear',
				'marquee-vertical': 'marquee-y var(--duration) linear infinite',
				'bg-position': 'bg-position 3s infinite alternate',
				'pop-blob': 'pop-blob 4s infinite',
				'flip-words': 'flip-words 8s infinite',
				fadeIn: 'fadeIn 0.5s ease-in',
				'blink-red': 'blink-red 2s infinite linear',
				sparkle: 'sparkle 2s ease-in-out infinite',
				meteor: 'meteor var(--duration) var(--delay) ease-in-out infinite',
				trail: 'trail var(--duration) linear infinite',
				led: 'led 100ms ease-in-out',
				shine: 'shine 8s ease-in-out infinite'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				serif: ['Merriweather', 'serif'],
				spaceGrotesk: ['Space Grotesk', 'monospace']
			},

			backgroundImage: {
				striped:
					'repeating-linear-gradient(45deg, #3B3A3D, #3B3A3D 5px, transparent 5px, transparent 20px)',
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			colors: {
				main: '#88aaee',
				mainAccent: '#4d80e6', // not needed for shadcn components
				overlay: 'rgba(0,0,0,0.8)',

				// light mode
				bg: '#dfe5f2',
				text: '#000',

				// dark mode
				darkBg: '#272933',
				darkText: '#eeefe9',
				darkBorder: '#000',
				secondaryBlack: '#1b1b1b', // opposite of plain white, not used pitch black because borders and box-shadows are that color

				dark: {
					50: '#EDEDED',
					100: '#dadada',
					200: '#b5b5b5',
					300: '#8f8f8f',
					400: '#6a6a6a',
					500: '#454545',
					600: '#373737',
					700: '#292929',
					800: '#1c1c1c',
					850: '#171717',
					900: '#0e0e0e'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				base: '5px',
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			boxShadow: {
				light: '4px -4px 0px 0px #000',
				dark: '4px -4px 0px 0px #000',
				glow: '0 0 20px rgba(255, 204, 112, 0.7), 0 0 40px rgba(200, 80, 192, 0.5), 0 0 60px rgba(65, 88, 208, 0.3)',
				glow2:
					'0 0 20px rgba(50, 255, 50, 0.7), 0 0 40px rgba(20, 200, 20, 0.5), 0 0 60px rgba(5, 150, 5, 0.3)'
			},
			translate: {
				boxShadowX: '4px',
				boxShadowY: '-4px',
				reverseBoxShadowX: '-4px',
				reverseBoxShadowY: '4px'
			},
			fontWeight: {
				base: '400',
				heading: '600'
			},
			screens: {
				w450: { raw: '(max-width: 450px)' }
			},
			filter: {
				'blur-20': 'blur(20px)',
				'blur-25': 'blur(25px)'
			},
			brightness: {
				150: '1.5'
			},
			keyframes: {
				moveUp: {
					'0%': { transform: 'translateY(5%)', opacity: '0' },
					'100%': { transform: 'translateY(0%)', opacity: '1' }
				},
				appear: {
					from: { opacity: '0' },
					to: { opacity: '1' }
				},
				shine: {
					from: { backgroundPosition: '200% 0' },
					to: { backgroundPosition: '-200% 0' }
				},
				fill: {
					'0%': { height: '0%' },
					'100%': { height: 'var(--progress-height)' }
				},
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'reveal-up': {
					'0%': { opacity: '0', transform: 'translateY(80%)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'reveal-down': {
					'0%': { opacity: '0', transform: 'translateY(-80%)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'marquee-x': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(calc(-100% - var(--gap)))' }
				},
				'marquee-y': {
					from: { transform: 'translateY(0)' },
					to: { transform: 'translateY(calc(-100% - var(--gap)))' }
				},

				'bg-position': {
					'0%': { backgroundPosition: '0% 50%' },
					'100%': { backgroundPosition: '100% 50%' }
				},
				'shape-shift': {
					'0%': {
						width: '40px',
						height: '20px'
					},
					'20%': { width: '240px', height: '128px' },
					'40%': { width: '80px', height: '80px' },
					'80%': { width: '128px', height: '240px' },
					'100%': { width: '80px', height: '80px' }
				},
				swing: {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(-30deg)' }
				},
				'content-blur': {
					'0%': { filter: 'blur(0.3rem)' },
					'100%': { filter: 'blur(0)' }
				},
				'pop-blob': {
					'0%': { transform: 'scale(1)' },
					'33%': { transform: 'scale(1.2)' },
					'66%': { transform: 'scale(0.8)' },
					'100%': { transform: 'scale(1)' }
				},
				'flip-words': {
					'10%': { transform: 'translateY(-112%)' },
					'25%': { transform: 'translateY(-100%)' },
					'35%': { transform: 'translateY(-212%)' },
					'50%': { transform: 'translateY(-200%)' },
					'60%': { transform: 'translateY(-312%)' },
					'75%': { transform: 'translateY(-300%)' },
					'85%': { transform: 'translateY(-412%)' },
					'100%': { transform: 'translateY(-400%)' }
				},
				fadeIn: {
					from: { opacity: '0' },
					to: { opacity: '1' }
				},
				'blink-red': {
					'0%, 100%': {
						backgroundColor: 'rgba(239, 68, 68, 0.7)',
						boxShadow: '0 0 30px 10px rgba(239, 68, 68, 0.5)'
					},
					'50%': {
						backgroundColor: 'rgba(239, 68, 68, 0.5)',
						boxShadow: '0 0 30px 10px rgba(239, 68, 68, 1)'
					}
				},
				'rotate-full': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				sparkle: {
					'0%, 100%': { opacity: '0.75', scale: '0.9' },
					'50%': { opacity: '1', scale: '1' }
				},
				meteor: {
					'0%': { transform: 'translateY(-20%) translateX(-50%)' },
					'100%': { transform: 'translateY(300%) translateX(-50%)' }
				},
				trail: {
					'0%': { '--angle': '0deg' },
					'100%': { '--angle': '360deg' }
				},
				led: {
					'0%': { fill: 'currentColor', brightness: '1' },
					'50%': { fill: '#a855f7', brightness: '500%' },
					'100%': { fill: 'currentColor', brightness: '1' }
				}
			},

			transitionTimingFunction: {
				slow: 'cubic-bezier(.405, 0, .025, 1)',
				'minor-spring': 'cubic-bezier(0.76,0.34,0.38,1.64)'
			},
			transitionDuration: {
				mid: '3s',
				long: '10s'
			},
			cursor: {
				sword: "url('/cursor.png'), default"
			}
		}
	},

	plugins: [
		require('tailwindcss-animate'),
		addVariablesForColors,
		function ({ matchUtilities, theme, addUtilities }: any) {
			addUtilities({
				'.border-border': {
					borderColor: theme('colors.border')
				}
			})
			matchUtilities(
				{
					'bg-grid': (value: any) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
						)}")`
					}),
					'bg-grid-small': (value: any) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
						)}")`
					}),
					'bg-dot': (value: any) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
						)}")`
					})
				},
				{ values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
			)
		}
	]
}

function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme('colors'))
	let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]))

	addBase({
		':root': newVars
	})
}
