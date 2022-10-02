/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffa000",
        primaryLight: "#ffffad",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
