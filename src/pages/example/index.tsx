import { NextPage } from 'next'
import useStateManager from '~/hooks/stateManager/useStateManager'

import Page from '~/layouts/page'

const Example: NextPage = () => {
  const { state } = useStateManager()

  return (
    <Page title="Example">
      <div className="py-10">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-default">
              Example
            </h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 text-default">
            <div className="p-4">Home increment count: ${state.count}</div>
          </div>
        </main>
      </div>
    </Page>
  )
}

export default Example
