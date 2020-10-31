module.exports = {
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  },
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    '@typescript-eslint',
    'eslint-plugin-react',
    'eslint-plugin-react-hooks'
  ],
  extends: [
    'airbnb-typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react'
  ],
  rules: {
    'spaced-comment': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-restricted-globals': 'off',
    'import/extensions': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-danger': 'off',
    'react/require-default-props': 'off',
    'no-nested-ternary': 'off',
    'import/no-unresolved': [
      2,
      {
        'ignore': ['~']
      }
    ]
  }
}
