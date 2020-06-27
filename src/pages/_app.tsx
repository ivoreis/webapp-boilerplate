import React, { FunctionComponent } from 'react'
import { AppProps } from 'next/app'
import { Global, css } from '@emotion/core'

import I18n from '~/hooks/i18n'
import StateManager from '~/hooks/stateManager'
import publicConfig from '~/config/client'

const App: FunctionComponent<AppProps> = (props) => {
  const { Component, pageProps } = props
  return (
    <StateManager
      initialState={{ config: publicConfig, ...pageProps.initialState }}
    >
      <I18n langDict={pageProps.langDict} locale={pageProps.locale}>
        <>
          <Global
            styles={css`
              body {
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Avenir Next,
                  Avenir, Helvetica, sans-serif;
              }
            `}
          />
          <Component {...pageProps} />
        </>
      </I18n>
    </StateManager>
  )
}
export default App
