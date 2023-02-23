/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    colors:{
      white:"#ffffff",
      black:"#000000",
      transparent: 'transparent',
      primary:"rgb(255, 171, 16)",
      // primary:"rgb(92, 216, 144)",
      // primaryTransparent:"rgba(255, 0, 179, 0.411)",
      primaryTransparent:"rgba(92, 216, 144,0.411) ",
      secondary:"",
      accent:"rgb(22, 26, 29)",
    }
  },
  plugins: [],
}
