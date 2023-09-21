import colors from 'tailwindcss/colors';
const plugin = require('tailwindcss/plugin');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      ssm: '400px',
      sm: '480px',
      xsm: '600px',
      md: '768px',
      xmd: '800px',
      lg: '976px',
      xlg: '1150px',
      xl: '1440px',
    },
      extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
         clashDisplay: ['var(--font-clashDisplay)', 'sans-serif'],
      },
        fontWeight: {
        thin: '100',
        'extra-light': '200',
        light: '300',
        regular: '400',
        medium: '500',
        'semi-bold': '600',
        bold: '700',
        'extra-bold': '800',
        black: '900',
      },
      fontSize: {
        // Header element styles
        'h-1': ['3.5rem', { lineHeight: '110%', fontWeight: 700 }],
        'h-2': ['3rem', { lineHeight: '110%', fontWeight: 700 }],
        'h-3': ['2.5rem', { lineHeight: '110%', fontWeight: 700 }],
        'h-4': ['2rem', { lineHeight: '110%', fontWeight: 700 }],
        'h-5': ['1.5rem', { lineHeight: '110%', fontWeight: 700 }],
        'h-6': ['1.25rem', { lineHeight: '110%', fontWeight: 600 }],

        // Body variant styles - [Large, Medium, Regular, Small]
        'body-l': ['1.25rem', { lineHeight: '140%', fontWeight: 400 }],
        'body-m': ['1.125rem', { lineHeight: '140%', fontWeight: 400 }],
        'body-r': ['1rem', { lineHeight: '140%', fontWeight: 400 }],
        'body-s': ['0.875rem', { lineHeight: '140%', fontWeight: 400 }],
        'caption-s': ['0.75rem', { lineHeight: '140%', fontWeight: 400 }],
      },
      colors: {
        
       gray: colors.zinc,
        'gray-1000': 'rgb(17,17,19)',
        'gray-1100': 'rgb(10,10,11)',
        system: {
          'purple-dark': '#150E28',
          'purple-light': '#D434FE',
          'purple': '#903AFF',
          cyan: '#50E3C2',
          orange: '#F5A623',
          violet: '#7928CA',
        },
      },
      keyframes: {
        loading: {
          '0%': {
            opacity: '.2',
          },
          '20%': {
            opacity: '1',
            transform: 'translateX(1px)',
          },
          to: {
            opacity: '.2',
          },
        },
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        translateXReset: {
          '100%': {
            transform: 'translateX(0)',
          },
        },
        fadeToTransparent: {
          '0%': {
            opacity: '1',
          },
          '40%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        },
           fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        marquee: {
          '0%': { left: '0' },
          '100%': { left: '-100%' },
        },
        blink: {
          '0%': { opacity: 0.2 },
          '20%': { opacity: 1 },
          '100% ': { opacity: 0.2 },
        },
      },
      animation: {
        fadeIn: 'fadeIn .3s ease-in-out',
        marquee: 'marquee 20s linear infinite',
        blink: 'blink 1.4s both infinite',
      },
    }, 
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/typography'),
    plugin(({ matchUtilities, theme }: any) => {
      matchUtilities(
        {
          'animation-delay': (value: any) => ({
            'animation-delay': value,
          }),
        },
        {
          values: theme('transitionDelay'),
        },
      );
    }),
  ],
} 
