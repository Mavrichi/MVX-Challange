/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:"media",
  theme: {
    extend: {
      colors:{
        primary:`#14151A`,
        secondary:`#15151Z`,
        primary1:`#1E1F25`,
        white:'#CDD0DB',
        gray:'#1E1F25',
        gray:{
          bg1:"#2A2C34",
          bg2:"#1E1F25",
          bg2Hover:"#343540",
          text100:"#9195A3",
          text200:"#60626D",
          
        },
        blue:{
          100:"#007CFF",
          neon100:"#1E65E733",
          neon200:"#77DCFD"
        }
        
        
      },
    },
    container: {
      center: true,
    },
    width: {
      '550': '550px',
      '450':'450px'
    },
  },
  plugins: [],
}

