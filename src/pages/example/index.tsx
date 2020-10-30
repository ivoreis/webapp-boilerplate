import { NextPage } from 'next'
import useStateManager from '~/hooks/stateManager/useStateManager'

import Page from '~/layouts/page'

const Example: NextPage = () => {
  const { state } = useStateManager()

  return <Page title="Example">Yo!!! ${state.count}</Page>
}

export default Example
