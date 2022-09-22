/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        current: "var(--background-color)",
      },
      textColor: {
        skin: {
          base: "var(--text-color)",
          btnText: "var(--text-color-button)",
        },
      },
      backgroundColor: {
        skin: {
          base: "var(--background-color)",
          indicator: "var(--fill-color-indicator)",
          btn: "var(--fill-color-button)",
          btnHover: "var(--fill-color-hover)",
        },
      },
      gradientColorStops: {
        skin: {
          hue: "var(--background-color)",
        },
      },
    },
  },
  plugins: [],
};
