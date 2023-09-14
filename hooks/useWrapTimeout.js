import { useEffect } from 'react'
import useImperativeTimeout from './useImperativeTimeout'

const useWrapTimeout = (callback, delay) => {
  const handle = useImperativeTimeout(callback, delay)
  useEffect(() => {
    if (delay != null) {
      handle.set()
      return handle.clear
    }
  }, [delay, handle])
}

export default useWrapTimeout
