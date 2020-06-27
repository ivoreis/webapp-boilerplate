import commonConfig from './common'

const config = {
  ...commonConfig,
  MY_SERVER_SECRET: 'MY_SERVER_SECRET',
}

export type ServerConfig = typeof config

export default config
