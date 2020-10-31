// @ts-ignore
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  ':root, :root[color-mode="light"]': {
    '--color-text': defaultTheme.colors.black,
    '--color-background': defaultTheme.colors.white,
    '--color-primary': defaultTheme.colors.blue['500'],
    '--color-secondary': defaultTheme.colors.red['500'],
    '--color-muted': defaultTheme.colors.red['500'],
    '--color-highlight': defaultTheme.colors.green['500'],
    '--color-accent': defaultTheme.colors.red['500'],
    '--color-gray': defaultTheme.colors.gray['500'],
  },
  ':root[color-mode="dark"]': {
    '--color-text': defaultTheme.colors.white,
    '--color-background': defaultTheme.colors.black,
    '--color-primary': defaultTheme.colors.blue['500'],
    '--color-secondary': defaultTheme.colors.red['500'],
    '--color-muted': defaultTheme.colors.red['500'],
    '--color-highlight': defaultTheme.colors.green['500'],
    '--color-accent': defaultTheme.colors.red['500'],
    '--color-gray': defaultTheme.colors.gray['500'],
  },
}
