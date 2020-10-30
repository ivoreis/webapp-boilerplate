import { useEffect, useState } from 'react'

const useResolveAfter = (delay: number) => {
  const [shouldResolve, setShouldResolve] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setShouldResolve(true)
    }, delay)
  })
  return shouldResolve
}

export default useResolveAfter
