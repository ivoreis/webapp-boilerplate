import React from 'react'
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import { Global, css } from '@emotion/core'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="description" content="next-boilerplate app" />
          <meta name="keywords" content="pwd,nextjs,reactjs,emotion" />
          <title>Next.js boilerplate</title>

          <link rel="manifest" href="/manifest.json" />
          <link
            href="/images/icons/icon-72x72.png"
            rel="icon"
            type="image/png"
            sizes="72x72"
          />
          <link
            href="/images/icons/icon-96x96.png"
            rel="icon"
            type="image/png"
            sizes="96x96"
          />
          <link
            rel="apple-touch-icon"
            sizes="192x192"
            href="/images/icons/icon-192x192.png"
          />
          <meta name="theme-color" content="#317EFB" />
          <Global
            styles={css`
              body {
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Avenir Next,
                  Avenir, Helvetica, sans-serif;
              }
            `}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
