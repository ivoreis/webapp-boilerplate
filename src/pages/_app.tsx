import React from 'react'
import App, { AppProps, AppContext } from 'next/app'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'

import { NextPageContext } from 'next'
import { getLanguageProps, I18nBaseProps } from '~/hooks/i18n/useI18n'
import I18n from '~/hooks/i18n'
import StateManager from '~/hooks/stateManager'

import '../tailwind.css'

const getBaseUrl = (ctx: NextPageContext) => {
  const host =
    ctx.req?.headers['x-env-app-host'] || ctx.req?.headers.host || null
  const protocol = ctx.req?.headers.protocol || 'https'
  return host && protocol
    ? `${host.includes('localhost') ? 'http' : protocol}://${host}`
    : ''
}
const fetchJson = (appContext: AppContext) => async (url: string) => {
  try {
    const apiResponse = await fetch(`${getBaseUrl(appContext.ctx)}${url}`)
    return apiResponse.json()
  } catch (error) {
    console.info(`failed to load`, url, error.message)
    return {}
  }
}

const CustomApp = (
  props: AppProps & {
    config: Record<string, string>
    languageProps: I18nBaseProps
    profile: Record<string, string>
  },
) => {
  const { Component, pageProps, profile, languageProps, config } = props

  return (
    <StateManager initialState={{ config, profile, ...pageProps.initialState }}>
      <I18n langDict={languageProps.langDict} locale={languageProps.locale}>
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
  const getResource = fetchJson(appContext)

  const languageProps = await getLanguageProps(appContext)
  const config = await getResource('/api/config/client')
  const profile = await getResource('/api/profile/me')

  return { ...appProps, languageProps, config, profile }
}

export default CustomApp
