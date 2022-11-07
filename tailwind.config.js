/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#112A46",
        primaryLight: "#ACC8E5",
        primaryDark: "#0f172a",
        secondaryDark:"#334155"
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
