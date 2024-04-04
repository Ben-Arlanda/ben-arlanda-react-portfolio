/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {

      }
    },
    screens: {
      xs: "480px",
      sm: "768pv",
      md: "1060px",
    },
  },
  plugins: [],
}

