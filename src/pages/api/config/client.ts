import type { NextApiHandler } from 'next'
import clientConfig from '~/config/client'

const handler: NextApiHandler = async (_req, res) => {
  const config = await clientConfig()
  res.setHeader('Content-Type', 'application/json')
  res.status(200).json(config)
}

export default handler
