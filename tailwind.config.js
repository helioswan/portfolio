/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#065993",
        primaryDark: "#052E4A",
        grey: "D9D9D9",
      },
      fontFamily: {
        sans: ["Ubuntu", "Sans-serif"],
      },
    },
  },
  plugins: [],
};
