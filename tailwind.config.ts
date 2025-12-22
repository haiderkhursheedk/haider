import type { Config } from "tailwindcss";

const config: Config = {
	
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
    	container: {
    		center: true,
    		padding: {
    			DEFAULT: '1rem',
    			md: '2rem',
    			lg: '4rem'
    		}
    	},
    	fontFamily: {
    		sans: [
    			'var(--font-inter)',
    			'sans-serif'
    		]
    	},
    	screens: {
    		sm: '375px',
    		md: '768px',
    		lg: '1200px'
    	},
    	extend: {
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {
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
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
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
			fontFamily: {
        'gambarino': ['Gambarino', 'serif'],
        'outfit': ['Outfit', 'sans-serif'],
        'mono': ['IBM Plex Mono', 'sans-serif'],
        'grotesque': ['Bricolage Grotesque', 'sans-serif'],
        'sans': ['var(--font-inter)', 'system-ui', 'sans-serif'],			
		'satoshi': ['Satoshi', 'sans-serif']
      },

    		animation: {
    			grid: 'grid 15s linear infinite',
    			ripple: 'ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite' ,
				scroll:
				"scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
    		},
    		keyframes: {
    			grid: {
    				'0%': {
    					transform: 'translateY(-50%)'
    				},
    				'100%': {
    					transform: 'translateY(0)'
    				}
    			},
    			ripple: {
    				'0%, 100%': {
    					transform: 'translate(-50%, -50%) scale(1)'
    				},
    				'50%': {
    					transform: 'translate(-50%, -50%) scale(0.9)'
    				}
    			},
				scroll: {
					to: {
					  transform: "translate(calc(-50% - 0.5rem))",
					},
				  },
    		}
    	}
    },
    plugins: [require("tailwindcss-animate")],
 };

// function addVariablesForColors({ addBase, theme }: any) {
// 	const allColors = flattenColorPalette(theme("colors"));
// 	const newVars = Object.fromEntries(
// 	  Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
// 	);
   
// 	addBase({
// 	  ":root": newVars,
// 	});
//   }
export default config;
