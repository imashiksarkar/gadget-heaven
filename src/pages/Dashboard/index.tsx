import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <section >
      <header className='bg-[#9538E2] py-8'>
        <div className='con flex flex-col items-center text-white'>
          <h1 className='text-3xl font-bold'>Dashboard</h1>
          <p className='mt-2 max-w-[65ch] text-center leading-7'>
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>

          <ul className='btn-group flex gap-8 mt-8'>
            <li>
              <Link
                to={'/dashboard/cart'}
                className='px-6 py-2 rounded-full bg-white text-[#9538E2] text-lg font-extrabold'
              >
                Cart
              </Link>
            </li>
            <li>
              <Link
                to={'/dashboard/wishlist'}
                className='px-6 py-2 rounded-full border-2 text-white text-lg font-semibold'
              >
                Wishlist
              </Link>
            </li>
          </ul>
        </div>
      </header>

      <div className='content'>
        <Outlet />
      </div>
    </section>
  )
}

export default Dashboard
