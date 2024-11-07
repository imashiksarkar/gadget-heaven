import Navbar from '@/components/Navbar'
import { useEffect } from 'react'

const NotFound = () => {
  useEffect(() => {
    document.title = '404 | Page not found.'
  }, [])

  return (
    <>
      <Navbar />
      <h1>Not Found</h1>
    </>
  )
}

export default NotFound
