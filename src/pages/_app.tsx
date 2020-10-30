import React, { useEffect, useState } from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import useSWR from 'swr'
import Grid from '~/components/spinners/grid'

import { I18nBaseProps } from '~/hooks/i18n/useI18n'
import I18n from '~/hooks/i18n'
import StateManager from '~/hooks/stateManager'

import '../tailwind.css'

const useResolveAfter = (delay: number) => {
  const [shouldResolve, setShouldResolve] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setShouldResolve(true)
    }, delay)
  })
  return shouldResolve
}

const fetcher = (url: string) => fetch(url).then((r) => r.json())

const Loader = () => (
  <main className="h-screen flex items-center bg-default">
    <div className="w-full text-center text-default">
      <Grid size={300} />
      <p>Loading...</p>
    </div>
  </main>
)

const CustomApp = (
  props: AppProps & {
    config: Record<string, string>
    languageProps: I18nBaseProps
    profile: Record<string, string>
  },
) => {
  const [shouldDisplayLoader, setShouldDisplayLoader] = useState(true)
  const resolve = useResolveAfter(500)

  const { Component, pageProps } = props
  const router = useRouter()

  const { data: config, error: configError } = useSWR(
    '/api/config/client',
    fetcher,
  )
  const { data: profile, error: profilError } = useSWR(
    '/api/profile/me',
    fetcher,
  )
  const { data: language } = useSWR(`/api/locale/${router.locale}`, fetcher)

  useEffect(() => {
    if (!config || !profile || !language || !resolve) {
      setShouldDisplayLoader(true)
    } else {
      setShouldDisplayLoader(false)
    }
  })

  if (configError || profilError) return <Loader />
  if (shouldDisplayLoader) {
    return <Loader />
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

export default CustomApp
