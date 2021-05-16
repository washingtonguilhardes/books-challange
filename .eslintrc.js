module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react',
    'react-hooks',
    'eslint-plugin-import-helpers',
    'jsx-a11y',
  ],
  rules: {
    'comma-dangle': 'off',
    semi: 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: ['/^react/', '/^@material-ui/', 'module', ['parent', 'sibling', 'index']],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
};
