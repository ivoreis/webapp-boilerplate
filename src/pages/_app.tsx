import React from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import useSWR from 'swr'
import Grid from '~/components/spinners/grid'

import { I18nBaseProps } from '~/hooks/i18n/useI18n'
import I18n from '~/hooks/i18n'
import StateManager from '~/hooks/stateManager'

import theme from '../theme'
import '../tailwind.css'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

const toCss = (json: Record<string, any>) =>
  Object.keys(json)
    .map((selector) => {
      const definition = json[selector]
      const rules = Object.keys(definition)
      const result = rules
        .map((rule) => `${rule}:${definition[rule]}`)
        .join(';')
      return `${selector}{${result}}`
    })
    .join('\n')

const CustomApp = (
  props: AppProps & {
    config: Record<string, string>
    languageProps: I18nBaseProps
    profile: Record<string, string>
  },
) => {
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

  if (configError || profilError) return <div>failed to load</div>
  if (!config || !profile || !language)
    return (
      <main className="h-screen flex items-center">
        <div className="w-full text-center">
          <Grid size={300} />
        </div>
      </main>
    )

  return (
    <StateManager initialState={{ config, profile, ...pageProps.initialState }}>
      <I18n langDict={language.langDict} locale={language.locale}>
        <>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <style>{toCss(theme)}</style>
          </Head>
          <Component {...pageProps} />
        </>
      </I18n>
    </StateManager>
  )
}

export default CustomApp
