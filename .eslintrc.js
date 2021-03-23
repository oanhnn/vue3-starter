module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    '@vue/standard',
    '@vue/typescript/recommended',
    '@vue/prettier/recommended',
    '@vue/prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 'esnext',
    sourceType: 'module',
  },
  plugins: ['import', 'prettier', '@typescript-eslint', 'vue'],
  rules: {
    'import/order': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
      alias: {
        map: [['@', './src']],
        extensions: ['.vue', '.ts', '.js', '.json'],
      },
    },
  },
  overrides: [
    {
      files: ['./tests/**/*.spec.ts'],
      env: { mocha: true },
      plugins: ['mocha'],
      extends: ['plugin:mocha/recommended'],
    },
  ],
}
