import { NextApiHandler } from 'next'

export type Verb = 'get' | 'post' | 'options' | 'delete' | 'put'

const methods = (map: Record<Verb, NextApiHandler>): NextApiHandler => {
  const allowedVerbs = Object.keys(map)
    .map((v) => v.toUpperCase())
    .join(', ')

  return (req, res, ...args) => {
    res.setHeader('Access-Control-Request-Method', allowedVerbs)
    const { method } = req

    const fn = (method && map[method.toLowerCase() as Verb]) || undefined

    if (!fn) {
      res.writeHead(405)
      res.end('Method Not Allowed')
      return
    }
    fn(req, res, ...args)
  }
}

export default methods
