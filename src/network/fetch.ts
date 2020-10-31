import fetch from 'isomorphic-unfetch'

const fetcher = (type?: 'JSON' | 'TEXT') => (url: string) =>
  fetch(url, { credentials: 'same-origin' })
    .then((response) => {
      if (response.ok) {
        return response
      }
      // convert non-2xx HTTP responses into errors:
      const error = new Error(response.statusText)
      // @ts-ignore
      error.response = response
      return Promise.reject(error)
    })
    .then((r) => (type === 'JSON' ? r.json() : r.text()))

export default fetcher
