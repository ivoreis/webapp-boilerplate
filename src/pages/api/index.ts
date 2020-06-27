import type { NextApiHandler } from 'next'
import serverConfig from '~/config/server'

const handler: NextApiHandler = (_req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.status(200).json({ message: 'OK', config: serverConfig })
}

export default handler
