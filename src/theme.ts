// @ts-ignore
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  ':root, :root[color-mode="light"]': {
    '--color-bg-primary': defaultTheme.colors.blue['600'],
    '--color-bg-secondary': defaultTheme.colors.red['600'],
    '--color-bg-default': defaultTheme.colors.white,
    '--color-bg-inverse': defaultTheme.colors.black,

    '--color-text-primary': defaultTheme.colors.black,
    '--color-text-secondary': '#755f17',
    '--color-text-default': defaultTheme.colors.black,
    '--color-text-default-soft': '#999',
    '--color-text-inverse': '#444',
    '--color-text-inverse-soft': '#767676',

    '--font-display': defaultTheme.fontFamily.sans,
    '--font-body': defaultTheme.fontFamily.sans,
    '--font-weight-normal': 400,
    '--font-weight-display': 400,
    '--font-weight-btn': 600,
  },
  ':root[color-mode="dark"]': {
    '--color-bg-primary': defaultTheme.colors.blue['600'],
    '--color-bg-secondary': defaultTheme.colors.red['600'],
    '--color-bg-default': defaultTheme.colors.black,
    '--color-bg-inverse': defaultTheme.colors.white,

    '--color-text-primary': defaultTheme.colors.white,
    '--color-text-secondary': '#927e7e',
    '--color-text-default': defaultTheme.colors.white,
    '--color-text-default-soft': '#6a6a6a',
    '--color-text-inverse': defaultTheme.colors.white,
    '--color-text-inverse-soft': '#bbb',
  },
}
