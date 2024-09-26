/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#26292f",
        secondary: "#2c58af",
        background : "#f6f6f7"
      },
      fontFamily:{
        sans : ['Roboto Condensed','sans-serif'],
      }
    },
  },
  plugins: [],
};
