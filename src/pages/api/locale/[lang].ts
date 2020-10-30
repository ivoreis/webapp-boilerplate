import type { NextApiHandler } from 'next'

export const getLocaleConfig = async (lang: string) => {
  try {
    return Promise.resolve({
      locale: lang,
      langDict: (await import(`~/locales/${lang}`)).default,
    })
  } catch (error) {
    return Promise.resolve({
      locale: 'en',
      langDict: (await import(`~/locales/en`)).default,
    })
  }
}

const handler: NextApiHandler = async (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  const { lang = 'en' } = req.query
  const localeConfig = await getLocaleConfig(lang as string)
  res.status(200).json(localeConfig)
}

export default handler
