// @ts-ignore
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  ':root': {
    '--color-bg-primary': defaultTheme.colors.blue['600'],
    '--color-bg-secondary': '#ffc402',
    '--color-bg-default': defaultTheme.colors.white,
    '--color-bg-inverse': defaultTheme.colors.white,

    '--color-text-primary': defaultTheme.colors.white,
    '--color-text-secondary': '#755f17',
    '--color-text-default': '#444',
    '--color-text-default-soft': '#999',
    '--color-text-inverse': '#444',
    '--color-text-inverse-soft': '#767676',

    '--font-display': defaultTheme.fontFamily.sans,
    '--font-body': defaultTheme.fontFamily.sans,
    '--font-weight-normal': 400,
    '--font-weight-display': 400,
    '--font-weight-btn': 600,

    '--rounded-btn': '0.25rem',
  },
  '.theme-dark': {
    '--color-bg-primary': '#847543',
    '--color-bg-secondary': '#dcd0c0',
    '--color-bg-default': '#f4f4f4',
    '--color-bg-inverse': '#373737',

    '--color-text-primary': defaultTheme.colors.white,
    '--color-text-secondary': '#927e7e',
    '--color-text-default': '#373737',
    '--color-text-default-soft': '#6a6a6a',
    '--color-text-inverse': defaultTheme.colors.white,
    '--color-text-inverse-soft': '#bbb',

    '--font-display': defaultTheme.fontFamily.sans,
    '--font-body': defaultTheme.fontFamily.sans,
    '--font-weight-normal': 400,
    '--font-weight-display': 400,
    '--font-weight-btn': 600,

    '--rounded-btn': 0,
  },
}
