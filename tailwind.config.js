/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      colors: {
        main: {
          DEFAULT: "#00A86B",
          50: "#DCF1CC",
          100: "#B9E7AA",
          200: "#66D06A",
          300: "#00A86B",
          400: "#007A82",
          600: "#002B5A",
        },
        "light-accent": "#5CB2BA",
        "dark-accent": "#896361",
        "light-shades": "#F2EFF0",
        "dark-shades": "#261D28",
        info: "#241f2b",
        success: "#3db25d",
        warning: "#bba225",
        danger: "#f44336",
      },
      fontFamily: {
        nunito: ["Nunito", "serif"],
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class",
};
