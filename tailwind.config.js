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
    extend: {
      colors: {
        text: 'var(--color-text)',
        background: 'var(--color-background)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        muted: 'var(--color-muted)',
        highlight: 'var(--color-highlight)',
        accent: 'var(--color-accent)',
        gray: 'var(--color-gray)',
      },
      textColor: {
        default: 'var(--color-text)'
      },
      backgroundColor: {
        default: 'var(--color-background)',
      },
      borderColor: {
        default: 'var(--color-text)'
      }
    },
  },
  plugins: [
    tailwindcssui
  ]
};
