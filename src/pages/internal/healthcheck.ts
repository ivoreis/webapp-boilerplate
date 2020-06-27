import { NextPage } from 'next'

const Healthcheck: NextPage = () => null

Healthcheck.getInitialProps = (context) => {
  const { res } = context
  if (res) {
    res.end('OK')
  }
  return {}
}

export default Healthcheck
