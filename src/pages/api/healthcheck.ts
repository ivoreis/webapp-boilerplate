import type { NextApiHandler } from 'next'
import fetch from 'isomorphic-unfetch'
import serverConfig from '~/config/server'

const handler: NextApiHandler = async (_req, res) => {
  const { status } = await fetch('https://example.com')
  const config = await serverConfig()

  res.setHeader('Content-Type', 'application/json')
  res.status(200).json({
    status,
    message: 'Healthy',
    config,
  })
}

export default handler
