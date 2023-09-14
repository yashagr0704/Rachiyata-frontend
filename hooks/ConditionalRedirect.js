import { useRouter } from 'next/router'
import { useEffect } from 'react'

const ConditionalRedirect = ({ condition, path }) => {
  const router = useRouter()

  useEffect(() => {
    if (condition) {
      router.push(path)
    }
  }, [condition, path, router])
  return null
}
export default ConditionalRedirect
