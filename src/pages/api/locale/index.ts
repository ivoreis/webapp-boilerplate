import type { NextApiHandler } from 'next'

const handler: NextApiHandler = async (_req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.status(200).json({
    locale: 'en',
    langDict: (await import(`~/locales/en`)).default,
  })
}

export default handler
