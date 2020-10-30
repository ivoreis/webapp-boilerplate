import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import Nav from '~/components/nav'

export interface PageProps {
  title?: string
  className?: string
}

const Page: NextPage<PageProps> = (props) => {
  const { children, title } = props
  return (
    <div className="min-h-screen">
      <Head>
        <title>{title}</title>
      </Head>
      <Nav />

      {children}
    </div>
  )
}

export default Page
