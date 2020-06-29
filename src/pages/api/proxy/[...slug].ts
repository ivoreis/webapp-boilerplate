import type { NextApiHandler } from 'next'

const handler: NextApiHandler = (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  // Proxy your request to another API and return result...
  res.status(200).json({ message: 'OK', params: req.query })
}

export default handler
