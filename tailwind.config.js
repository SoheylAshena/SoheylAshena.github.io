/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maskImage: {
        "border-gradient":
          "conic-gradient(from 0deg, #ff0099 25%, #00d4ff 75%,#ff0099 )",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Yesteryear: ["Yesteryear", "cursive"],
        Imperial: ["Imperial Script", "cursive"],
      },
      keyframes: {},
      animation: {},
    },
  },
  plugins: [],
};
