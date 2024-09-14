/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#36384D",
        secondary: "#242742",
      },
      screens: {
        xs: "0px",
        sm: "768px",
        md: "1060px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
