import { useEffect, useState, useRef } from 'react'

const useResolveAfter = (delay: number) => {
  const timeout = useRef<ReturnType<typeof setTimeout>>()
  const [shouldResolve, setShouldResolve] = useState(false)

  useEffect(() => {
    timeout.current = setTimeout(() => {
      setShouldResolve(true)
    }, delay)

    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current)
      }
    }
  })
  return shouldResolve
}

export default useResolveAfter
