/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: { ...colors },
    fontFamily: {
      headings: ["Rampart One", "sans-serif"],
      plainText: ["Balsamiq Sans", "sans-serif"],
    },

    extend: {},
  },
  plugins: [],
};
