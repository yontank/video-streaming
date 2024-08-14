const colors = require('tailwindcss/colors');
const daisyui = require('daisyui');

module.exports = {
  content: ['./src/renderer/**/*.{js,jsx,ts,tsx,ejs}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
        primary: '#393C43',
        secondary: '#595959',
        warning: '#A50121',
        success: colors.green,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [daisyui],
};
