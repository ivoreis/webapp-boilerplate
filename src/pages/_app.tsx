import React, { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import App, { AppContext } from 'next/app'
import { useRouter } from 'next/router'
import Head from 'next/head'
import useSWR from 'swr'

import Loader from '~/components/loader'

import ErrorPage from '~/pages/_error'
import fetcher from '~/network/fetch'
import type { I18nBaseProps } from '~/hooks/i18n/useI18n'
import I18n from '~/hooks/i18n'
import StateManager from '~/hooks/stateManager'
import useResolveAfter from '~/hooks/useResolveAfter'

import '../tailwind.css'

export type BaseAppProps = AppProps & {
  config: Record<string, string>
  profile: Record<string, string>
  language: I18nBaseProps
  error?: Error
  statusCode?: number
}

const BaseApp = (props: BaseAppProps) => {
  const {
    Component,
    pageProps,
    profile,
    language,
    config,
    error,
    statusCode,
  } = props

  if (error) {
    return <ErrorPage statusCode={statusCode} error={error} />
  }

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

const CSRApp = (props: BaseAppProps) => {
  const [shouldDisplayLoader, setShouldDisplayLoader] = useState(true)
  // Add artificial delay to ensure a consistent splash page display time
  const resolve = useResolveAfter(500)
  const router = useRouter()

  const { data: config, error: configError } = useSWR(
    '/api/config/client',
    fetcher('JSON'),
  )
  const { data: profile, error: profileError } = useSWR(
    '/api/profile/me',
    fetcher('JSON'),
  )
  const { data: language, error: languageError } = useSWR(
    `/api/locale/${router.locale}`,
    fetcher('JSON'),
    {
      shouldRetryOnError: true,
    },
  )

  useEffect(() => {
    if (!config || !profile || !language || !resolve) {
      setShouldDisplayLoader(true)
    } else {
      setShouldDisplayLoader(false)
    }
  })

  if (shouldDisplayLoader) {
    return <Loader />
  }

  const baseAppProps = {
    ...props,
    error: configError || profileError || languageError,
    config,
    profile,
    language,
  }

  return <BaseApp {...baseAppProps} />
}

const getInitialProps = async (appContext: AppContext) => {
  const locale = appContext.router.locale as string

  // Handle server
  if (appContext.ctx.req) {
    const { getLocaleConfig } = await import('~/pages/api/locale/[lang]')
    const { getProfile } = await import('~/pages/api/profile/me')
    const { default: clientConfig } = await import('~/config/client')

    try {
      const appProps = await App.getInitialProps(appContext)
      const language = await getLocaleConfig(locale)
      const config = await clientConfig()
      const profile = await getProfile()

      return {
        ...appProps,
        language,
        config,
        profile,
      }
    } catch (error) {
      return {
        statusCode: 500,
        error,
      }
    }
  }

  try {
    // Handle client
    const jsonFetcher = fetcher('JSON')
    const appProps = await App.getInitialProps(appContext)
    const language = await jsonFetcher(`/api/locale/${locale}`)
    const config = await jsonFetcher(`/api/config/client`)
    const profile = await jsonFetcher(`/api/profile/me`)

    return {
      ...appProps,
      language,
      config,
      profile,
    }
  } catch (error) {
    return {
      statusCode: 500,
      error,
    }
  }
}

export default ((type: 'SSR' | 'CSR') => {
  if (type === 'SSR') {
    // @ts-ignore
    BaseApp.getInitialProps = getInitialProps
  }
  return type === 'SSR' ? BaseApp : CSRApp
})('CSR')
