import { useEffect } from 'react'
import useImperativeInterval from './useImperativeInterval'

const useWrapInterval = (callback, delay) => {
  const handle = useImperativeInterval(callback, delay)
  useEffect(() => {
    if (delay != null) {
      handle.set()
      return handle.clear
    }
  }, [delay, handle])
}

export default useWrapInterval
