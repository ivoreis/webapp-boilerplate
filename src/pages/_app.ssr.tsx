import React from 'react'
import type { AppProps } from 'next/app'
import App, { AppContext } from 'next/app'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'

import type { I18nBaseProps } from '~/hooks/i18n/useI18n'
import I18n from '~/hooks/i18n'
import StateManager from '~/hooks/stateManager'

import '../tailwind.css'

const CustomApp = (
  props: AppProps & {
    config: Record<string, string>
    profile: Record<string, string>
    language: I18nBaseProps
  },
) => {
  const { Component, pageProps, profile, language, config } = props

  return (
    <StateManager initialState={{ config, profile, ...pageProps.initialState }}>
      <I18n langDict={language.langDict} locale={language.locale}>
        <>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
          </Head>
          <Component {...pageProps} />
        </>
      </I18n>
    </StateManager>
  )
}

CustomApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext)
  const locale = appContext.router.locale as string

  // Handle server
  if (appContext.ctx.req) {
    const { getLocaleConfig } = await import('~/pages/api/locale/[lang]')
    const { getProfile } = await import('~/pages/api/profile/me')
    const { default: clientConfig } = await import('~/config/client')

    return {
      ...appProps,
      language: await getLocaleConfig(locale),
      config: await clientConfig(),
      profile: await getProfile(),
    }
  }

  // Handle client
  const language = await fetch(`/api/locale/${locale}`)
  const config = await fetch(`/api/config/client`)
  const profile = await fetch(`/api/profile/me`)

  return {
    ...appProps,
    language: await language.json(),
    config: await config.json(),
    profile: await profile.json(),
  }
}

export default CustomApp
