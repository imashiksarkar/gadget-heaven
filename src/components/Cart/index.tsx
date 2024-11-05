import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import CartItem from './CartItem'

const Cart = () => {
  return (
    <section>
      <div className='con py-8'>
        <header className='flex flex-col md:flex-row gap-6 items-center text-xl font-bold'>
          <h1 className='grow'>Cart</h1>
          <h2>Total cost: 999.99</h2>
          <div className='p-[2px]  bg-gradient-to-r from-blue-500 to-pink-500 w-max rounded-full'>
            <Link
              to={'?sort=desc'}
              className='flex py-2 px-4 gap-2 text-lg bg-white font-semibold text-[#8332C6] hover:text-[#8332C6] rounded-full'
            >
              <span>Sort by Price</span>
              <img
                className='w-6 aspect-square'
                src='/sort-icon.png'
                alt='sort'
              />
            </Link>
          </div>
          <Button
            variant={'ghost'}
            className='rounded-full text-lg font-semibold border-2 text-white  bg-gradient-to-t from-[#E066E6] to-[#9532E5] w-max hover:text-slate-300 p-6'
          >
            Purchase
          </Button>
        </header>
      </div>

      <div className='con'>
        <ul className='flex flex-col items-center gap-4'>
          <li className='w-full flex justify-center'>
            <CartItem />
          </li>
          <li className='w-full flex justify-center'>
            <CartItem />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Cart
