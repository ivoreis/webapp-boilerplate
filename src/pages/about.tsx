import { NextPage } from 'next'
import Page from '~/layouts/page'

const About: NextPage = () => {
  return (
    <Page title="About">
      <div className="py-10">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-default">
              About
            </h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="p-4" />
          </div>
        </main>
      </div>
    </Page>
  )
}

export default About
