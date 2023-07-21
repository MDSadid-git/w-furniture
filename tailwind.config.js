/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#f7941d",
      },
      colors: {
        primary: "#f7941d",
        secondary: "#efe9e5",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        basker: ["Libre Baskerville", "serif"],
        dancing: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [],
};
