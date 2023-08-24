/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#ffff',
        secondary:'#C82C2F',
        Blue:'#00ADEF',
        softBleu:'#02688F',
        nightBleu:"#176d8c",
        soft:'#02688F',
        pble:'#11bad5'

      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    fontFamily:{
      'hello':'hello',
      'yavon':'yavon',
      'poppins':'poppins',
    }
  },
  plugins: [],
}

