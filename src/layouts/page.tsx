import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import Nav from '~/components/nav'

export interface PageProps {
  title?: string
  className?: string
}

const Page: NextPage<PageProps> = (props) => {
  const { children, title, className } = props
  return (
    <div className={className}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      {children}
    </div>
  )
}

export default Page
