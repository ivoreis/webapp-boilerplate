import React, { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import useSWR from 'swr'
import Loader from '~/components/loader'

import I18n from '~/hooks/i18n'
import StateManager from '~/hooks/stateManager'
import useResolveAfter from '~/hooks/useResolveAfter'

import '../tailwind.css'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

const CustomApp = (props: AppProps) => {
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
