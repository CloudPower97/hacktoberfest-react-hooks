import { useState, useEffect, useRef } from 'react'

function useAbstract() {
  const [customHook, setCustomHook] = useState()
  const timeoutId = useRef()

  useEffect(() => {
    timeoutId.current = setTimeout(() => {
      setCustomHook('Abstract Technology custom Hook!')
    }, 2000)

    return () => {
      clearTimeout(timeoutId.current)
    }
  }, [])

  return customHook
}

export default useAbstract
