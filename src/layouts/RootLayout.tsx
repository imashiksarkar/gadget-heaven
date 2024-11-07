import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Toaster } from '@/components/ui/toaster'

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
        <Toaster />
      </main>
      <Footer />
    </>
  )
}

export default RootLayout
