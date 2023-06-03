/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primary: "#00A86B",
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
    },
  },
  plugins: [],
};
