import commonConfig from './common'

const config = {
  ...commonConfig,
  MY_PUBLIC_KEY: 'MY_PUBLIC_KEY',
}

export type PublicConfig = typeof config

export default config
