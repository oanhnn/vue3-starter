const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  mode: 'jir',
  content: ['./public/**/*.{php,html}', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: 'media', // false or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')],
}
