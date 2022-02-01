const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit", // just-in-time mode
  purge: ["./src/**/*.{js,vue,jsx,ts,tsx}", "./public/**/*.html"],
  darkMode: "class", // or 'media' or 'class'
  content: [
    "./assets/**/*.{css}",
    "./components/*.{js,vue}",
    "./components/**/*.{js,vue}",
    "./layouts/**/*.vue",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./*.{vue,js}",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0.5rem",
        sm: "1rem",
        md: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "6rem",
      },
      // margin: {
      //   DEFAULT: "0.5rem",
      //   sm: "1rem",
      //   md: "2rem",
      //   lg: "3rem",
      //   xl: "4rem",
      //   "2xl": "6rem",
      // },
    },
    screens: {
      xs: "480px",
      sm: "640px", // => @media (min-width: 640px) { ... }
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      // ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primary: "#3277B3",
        secondary: "#E2E4E9",
        hover: "#2D6A9F",
        accent: "#37474F",
        black: "#353535",
        white: "#ffffff",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
