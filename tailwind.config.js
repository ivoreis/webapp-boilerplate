// Default tailwind config - https://tailwindcss.com/docs/configuration/
module.exports = {
  purge: [
    './src/**/*.tsx',
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {},
  variants: {},
  plugins: [],
};
