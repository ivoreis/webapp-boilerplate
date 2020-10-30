import type { NextApiHandler } from 'next'

export const getLocaleConfig = async () =>
  Promise.resolve({
    locale: 'en',
    langDict: (await import(`~/locales/en`)).default,
  })

const handler: NextApiHandler = async (_req, res) => {
  const localeConfig = await getLocaleConfig()
  res.setHeader('Content-Type', 'application/json')
  res.status(200).json(localeConfig)
}

export default handler
