/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'banner': {
          'light': '#494F7D',
          DEFAULT: '#24294C'
        },
        'wizard': {
          DEFAULT: '#5E6698'
        }
      }
    },
  },
  plugins: [],
}
