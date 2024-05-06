module.exports = {
  root: true,
  env: { browser: true, es2020: true, jest: true, node: true },
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  // ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './jsconfig.json',
  },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-duplicate-imports': 'error',
    'import/no-extraneous-dependencies': [
      'off',
      {
        devDependencies: false,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'react/prop-types': 'off',
    camelcase: 'error',
  },
};
