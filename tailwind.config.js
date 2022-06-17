/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#eda19b',
      'secondary': '#0f2064',
      'white': '#fff',
      'gray': '#f9f9f9',
      'dark': '#252B42',
      'lightgray': '#FAFAFA',
      'textgray': '#323232'
    },
    extend: {
      height: {
      '128': '39rem',
      '130': '32rem'
      },
      width: {        
        '129': '59rem',
        '131': '30rem'
      }
    },
  },
  plugins: [],
}
