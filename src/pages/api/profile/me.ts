import type { NextApiHandler } from 'next'

const handler: NextApiHandler = async (_req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.status(200).json({
    name: 'John Doe',
    age: '30',
    id: '43634bfa-460c-4563-8040-93a7d14ab91c',
  })
}

export default handler
