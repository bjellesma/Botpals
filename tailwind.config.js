/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./public/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // allows you to add custom classes
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
      gridTemplateColumns: {
        '70-30': '70% 28%'
      }
    },
  },
  plugins: [],
}