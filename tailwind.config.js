/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens:{
        "sm":"480px"
      },
      aspectRatio: {
        '1/2': '1 / 2',
        '2/1': '2 / 1',
      },
    },
    fontFamily: {
      nunito:["Nunito", 'sans-serif']
    }
  },
  plugins: [],
}

