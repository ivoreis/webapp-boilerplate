import type { NextApiHandler } from 'next'

export const getProfile = async (similateFailure: boolean = false) => {
  if (similateFailure) {
    const error = new Error('Failed to fetch profile')
    // @ts-ignore
    error.response = null
    return Promise.reject(error)
  }

  return Promise.resolve({
    name: 'John Doe',
    age: '30',
    id: '43634bfa-460c-4563-8040-93a7d14ab91c',
  })
}

const handler: NextApiHandler = async (_req, res) => {
  res.setHeader('Content-Type', 'application/json')
  try {
    const profile = await getProfile()
    return res.status(200).json(profile)
  } catch (error) {
    return res.status(500).json(error)
  }
}

export default handler
