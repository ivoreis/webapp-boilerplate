import { useEffect, useState } from 'react'

const useResolveAfter = (delay: number) => {
  const [shouldResolve, setShouldResolve] = useState(false)
  useEffect(() => {
    const id = setTimeout(() => {
      setShouldResolve(true)
    }, delay)

    return () => {
      clearTimeout(id)
    }
  })
  return shouldResolve
}

export default useResolveAfter
