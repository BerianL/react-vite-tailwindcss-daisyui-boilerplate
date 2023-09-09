// noinspection JSUnusedGlobalSymbols

/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {},
  /*eslint-env node*/
  plugins: [require('daisyui')],
};