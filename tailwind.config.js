// Default tailwind config - https://tailwindcss.com/docs/configuration/
const tailwindcssui = require('@tailwindcss/ui')

module.exports = {
  purge: [
    './src/**/*.tsx',
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    textColor: {
      primary: 'var(--color-text-primary)',
      secondary: 'var(--color-text-secondary)',
      default: 'var(--color-text-default)',
      'default-soft': 'var(--color-text-default-soft)',
      inverse: 'var(--color-text-inverse)',
      'inverse-soft': 'var(--color-text-inverse-soft)',
    },
    backgroundColor: {
      primary: 'var(--color-bg-primary)',
      secondary: 'var(--color-bg-secondary)',
      default: 'var(--color-bg-default)',
      inverse: 'var(--color-bg-inverse)',
    },
    fontFamily: {
      display: 'var(--font-display)',
      body: 'var(--font-body)',
    },
    fontWeights: {
      normal: 'var(--font-weight-normal)',
      display: 'var(--font-weight-display)',
    },
  },
  variants: {},
  plugins: [
    tailwindcssui
  ]
};
