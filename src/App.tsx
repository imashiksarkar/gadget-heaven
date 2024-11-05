import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Statistics from './pages/Statistics'
import Order from './pages/Order'
import Cart from './components/Cart'
import Wishlist from './components/Wishlist'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/statistics',
        element: <Statistics />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
          {
            path: '/dashboard/cart',
            element: <Cart />,
          },
          {
            path: '/dashboard/wishlist',
            element: <Wishlist />,
          },
        ],
      },
      {
        path: '/order',
        element: <Order />,
      },
    ],
  },
])

const App = () => <RouterProvider router={router} />

export default App
