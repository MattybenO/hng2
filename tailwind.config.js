/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: [ "Lalezar", "system-ui"],
        mon: ["Montserrat", 'sans-serif'],

      },
      colors: {
        primary: '#000',
        secondary: '#0B0B0B',
        Dark: '#3B3B3B',
        bla: "#313131",
        b: "#0E0E0E",
      },


      
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
        },
      },
      
    },
  },
  plugins: [],
}

