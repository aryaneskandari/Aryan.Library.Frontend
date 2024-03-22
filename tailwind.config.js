/** @type {import('tailwindcss').Config} */
const { join } = require('path');

module.exports = {
  content: [join(__dirname, 'src/**/*.{html,ts}')],
  theme: {
    extend: {
      fontFamily:{
        table:['"PeydaExtraLight"'],
        table_th:['"PeydaExtraBold"']
      }
    },
  },
  plugins: [],
}

