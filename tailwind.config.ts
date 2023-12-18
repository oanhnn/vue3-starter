import { Config } from 'tailwindcss'
import aspectRatio from '@tailwindcss/aspect-ratio'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  mode: 'jir',
  content: ['./public/**/*.{php,html}', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: 'media', // false or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', ...fontFamily.sans],
      },
    },
  },
  plugins: [aspectRatio, forms, typography],
}
