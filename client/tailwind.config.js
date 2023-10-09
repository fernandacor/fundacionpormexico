/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["Montserrat", ...defaultTheme.fontFamily.sans] },
    },
  },
  plugins: [],
};
