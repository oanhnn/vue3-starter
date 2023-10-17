module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'esnext',
    sourceType: 'module',
  },
  plugins: ['import'],
  rules: {
    'import/order': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': 'warn',
  },
  settings: {
    'import/extensions': ['.vue', '.js', '.jsx','.mjs', '.cjs', '.ts', 'tsx', '.json'],
    'import/resolver': {
      alias: {
        map: [['@', './src']],
      },
      // this loads <rootdir>/tsconfig.json to eslint
      typescript: {},
    },
  },
  // overrides: [
  //   {
  //     files: ['./tests/**/*.spec.ts'],
  //   },
  // ],
}
