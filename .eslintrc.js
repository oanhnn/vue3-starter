module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
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
    'import/extensions': ['.vue', '.js', '.jsx', '.mjs', '.ts', 'tsx', '.json'],
    'import/resolver': {
      alias: {
        map: [['@', './src']],
      },
      // this loads <rootdir>/tsconfig.json to eslint
      typescript: {},
    },
  },
  overrides: [
    {
      files: ['./tests/unit/**/*.spec.ts'],
      env: { mocha: true },
      plugins: ['mocha'],
      extends: ['plugin:mocha/recommended'],
    },
  ],
}
