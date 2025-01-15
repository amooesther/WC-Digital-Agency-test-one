/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':"#f9aa1b",
        'secondary':"#5b2e14",
        'colorThree':"#ce652b",   
        'colorFour':"#faf5f2",     

      }
    },
  },
  plugins: [],
}