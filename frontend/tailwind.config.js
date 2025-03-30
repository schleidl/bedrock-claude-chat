/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      body: ['Amazon Ember', 'Arial', 'sans-serif'],
    },
    extend: {
      transitionProperty: {
        width: 'width',
        height: 'height',
      },
      animation: {
        fastPulse: 'pulse 0.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      colors: {
        'aws-squid-ink': {
          light: '#232F3E', // AWS dark blue/navy
          dark: '#171717',
        },
        'aws-sea-blue': {
          light: '#0073BB', // AWS blue
          dark: '#0073BB',
        },
        'aws-sea-blue-hover': {
          light: '#005A93', // Darker AWS blue for hover
          dark: '#005A93',
        },
        'aws-orange': {
          light: '#FF9900', // AWS orange
          dark: '#FF9900',
        },
        'aws-orange-hover': {
          light: '#EC7211', // Darker AWS orange for hover
          dark: '#EC7211',
        },
        'aws-aqua': '#00A1C9', // AWS teal/aqua
        'aws-lab': '#38ef7d',
        'aws-mist': '#9ffcea',
        'aws-font-color': {
          light: '#232F3E', // AWS dark blue/navy
          dark: '#FFFFFF',
          gray: '#879596', // AWS gray
          blue: '#0073BB', // AWS blue
        },
        'aws-font-color-white': {
          light: '#FFFFFF',
          dark: '#FFFFFF',
        },
        'aws-ui-color': {
          dark: '#161E2D', // AWS dark background
        },
        'aws-paper': {
          light: '#F2F3F3', // AWS light background
          dark: '#161E2D',
        },
        red: '#dc2626',
        'light-red': '#fee2e2',
        yellow: '#f59e0b',
        'light-yellow': '#fef9c3',
        'dark-gray': '#6b7280',
        gray: '#9ca3af',
        'light-gray': '#e5e7eb',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/typography'), require('tailwind-scrollbar')],
};
