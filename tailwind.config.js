/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'sanFrancisco' : "url('../src/assets/sanFrancisco.jpg')",
        'sanFranciscoDesktop' : "url('../src/assets/sanFranciscoDesktop.jpg')",
        'yosemite' : "url('../src/assets/yosemite.jpg')",
        'LA' : "url('../src/assets/LA.jpg')",
        'seattle' : "url('../src/assets/seattle.jpg')",
        'new_york' : "url('../src/assets/new_york.jpg')",
        'norway' : "url('../src/assets/norway.jpg')",
        'sydney' : "url('../src/assets/sydney.jpg')",
        'miami' : "url('../src/assets/miami.jpg')",
        'switzerland' : "url('../src/assets/switzerland.jpg')",
        'bali' : "url('../src/assets/bali.jpg')",
        'chicago' : "url('../src/assets/chicago.jpg')",
        'europe' : "url('../src/assets/europe.jpg')",
        'iceland' : "url('../src/assets/iceland.jpg')",
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary':'#CC2D4A',
        'secondary': '#BFA206',
        'terciary': '#61AEC9'
      }),
      textColor:{
        'primary':'#CC2D4A',
        'secondary': '#BFA206',
        'terciary': '#61AEC9'
      }
    },
  },
  plugins: [],
}

