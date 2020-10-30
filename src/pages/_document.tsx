import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

import { type } from 'os'
import theme from '../theme'

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

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="description" content="webapp boilerplate" />
          <meta name="keywords" content="pwd,nextjs,reactjs" />
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
          <link rel="icon" href="/favicon.ico" />
          <style dangerouslySetInnerHTML={{ __html: toCss(theme) }} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              if(
                localStorage.getItem("color-mode") === "dark" || 
                (window.matchMedia("(prefers-color-scheme: dark)").matches && !localStorage.getItem("color-mode"))
              ) { 
                document.documentElement.setAttribute("color-mode", "dark");
              }`,
            }}
          />
        </Head>
        <body className="bg-default transition duration-150 ease-in-out">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
