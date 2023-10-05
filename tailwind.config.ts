/** @type {import('tailwindcss').Config} */
// @ts-nocheck
const plugin = require('tailwindcss/plugin');
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    transitionDuration: {
      0: '0ms',
      250: '250ms',
    },
    rotate: {
      '-45': '-45deg',
      '-90': '-90deg',
      '-180': '-180deg',
      '-270': '-270deg',
      '-360': '-360deg',
    },
    extend: {
      fontFamily: {
        body: ['var(--font-open-sans)'],
        display: ['var(--font-roboto)'],
      },
      fontSize: {
        '10xl': '10rem',
      },
      backgroundImage: {
        'paper-pattern': "url('/paper-background.jpg')",
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        waveMotion: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-1rem)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'wave-motion': 'waveMotion 3s infinite alternate',
        blink: 'blink 0.8s infinite',
      },
      textShadow: {
        sm: '0 1px 2px #000',
        DEFAULT: '0 2px 4px #000',
        lg: '0 8px 16px #000',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('tailwindcss-fluid-type'),
    plugin(({ addVariant }) => {
      addVariant('group-active-link', ':merge(.group).active-link &');
    }),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      );
    }),
  ],
};
