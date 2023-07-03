/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'bg': '#fefae0',
        'bg-footer': '#faedcd',
      },
      fontFamily:{
        'monteserat': ['Montserrat'],
        'frauce': ['Fraunces']
      }
    },
  },
  plugins: [],
}