import type { NextApiHandler } from 'next'

export const getProfile = async () =>
  Promise.resolve({
    name: 'John Doe',
    age: '30',
    id: '43634bfa-460c-4563-8040-93a7d14ab91c',
  })

const handler: NextApiHandler = async (_req, res) => {
  const profile = await getProfile()
  res.setHeader('Content-Type', 'application/json')
  res.status(200).json(profile)
}

export default handler
