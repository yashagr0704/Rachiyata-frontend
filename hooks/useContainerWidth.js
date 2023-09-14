import { useLayoutEffect, useState } from 'react'
import useResizeObserver from '@react-hook/resize-observer'

const useContainerWidth = ContainerRef => {
  const [ContainerWidth, setContainerWidth] = useState(0)

  useLayoutEffect(() => {
    setContainerWidth(ContainerRef.current.getBoundingClientRect().width)
  }, [ContainerRef])

  useResizeObserver(ContainerRef, entry => setContainerWidth(entry.contentRect.width))

  return ContainerWidth
}

export default useContainerWidth
