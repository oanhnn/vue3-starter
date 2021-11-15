const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jir',
  purge: ['./public/**/*.{php,html}', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: 'media', // false or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
