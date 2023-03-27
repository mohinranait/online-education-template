/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./assets/**/*.{html,js}"],
  theme: {
    fontFamily: {
      titleFont: ['Manrope', 'sans-serif'],
      textFont: ['Manrope', 'sans-serif'],
    },
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1400px',
    },
   
    container: {
      center: true,
      padding: '10px',
    },
    extend: {
      colors:{
        "primaryColor":'#ff3838',
      },
    },
  },
  plugins: [],
}
