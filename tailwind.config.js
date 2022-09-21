/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        current: "var(--fill-color)",
      },
      textColor: {
        skin: {
          base: "var(--text-color)",
        },
      },
      backgroundColor: {
        skin: {
          fill: "var(--fill-color)",
          indicator: "var(--fill-color-indicator)",
        },
      },
      gradientColorStops: {
        skin: {
          hue: "var(--fill-color)",
        },
      },
    },
  },
  plugins: [],
};
