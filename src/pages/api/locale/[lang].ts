import type { NextApiHandler } from 'next'

const handler: NextApiHandler = async (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  const { lang = 'en' } = req.query

  try {
    res.status(200).json({
      locale: lang as string,
      langDict: (await import(`~/locales/${lang}`)).default,
    })
  } catch (error) {
    res.status(200).json({
      locale: 'en',
      langDict: (await import(`~/locales/en`)).default,
    })
  }
}

export default handler
