/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      'sm': '640px',

      'md': '768px',

      'custom': '900px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    },
    extend: {
      colors: {
        current: "var(--background-color)",
      },
      textColor: {
        skin: {
          base: "var(--text-color)",
          btnText: "var(--text-color-button)",
          iconText: "var(--fill-color-button)",
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
