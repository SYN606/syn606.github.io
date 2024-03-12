/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        "sm": "480px"
      },
      aspectRatio: {
        '1/2': '1 / 2',
        '2/1': '2 / 1',
      },
    },
    fontFamily: {
      nunito: ["Nunito", 'sans-serif']
    },
    colors: {
      // light mode css
      "light-text": " #0f0506",
      "light-background": "#D8EEFD",
      "light-primary": "#d21e1e",
      "light-secondary": "#c7dc9f",
      "light-accent": "#8ace77",

      // dark mode css
      "dark-text": "#faf0f1",
      "dark-background": "#021C18",
      "dark-primary": "#e12d2d",
      "dark-secondary": "#4c6123",
      "dark-accent": "#438731",

      "black": "#00000",
      "dark-gray": "#272326",
      "light-gray": "#A9A9A9",
      "white": "#F2F3F5",
    },
  },
  plugins: [],
}

