/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      keyframes:{
        scrollIn:{
          '0%': { opacity: '0', transform: "translateY(10px)"},
          '100%': { opacity: '1', transform: "translateY(0)"}
        }
      },
      animation:{
        scrollIn: "scrollIn 700ms cubic-bezier(.4,0,.2,1) both"
      },
      colors:{
        background:{
          light: "#f9f9fb",
          dark: "#15161e",
        }
      }
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'animate-delay': (value) => ({
            animationDelay: value,
          }),
        },
        { values: theme('transitionDelay') }
      )
    }),
  ],
}