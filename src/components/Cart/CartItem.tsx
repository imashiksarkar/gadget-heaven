import { Button } from '../ui/button'

const CartItem = () => {
  return (
    <div className='cart-item bg-white p-4 rounded-2xl relative w-min md:w-full md:flex gap-4'>
      <figure className='w-64 lg:w-52 aspect-[1.6/1] rounded-2xl overflow-hidden'>
        <img
          className='w-full h-full object-cover'
          src='/banner.jpg'
          alt='product'
        />
      </figure>
      <div className='details mt-3 md:mt-0 flex gap-2 flex-col justify-between'>
        <h1 className='text-xl md:text-2xl font-semibold'>
          Samsung Galaxy S23 Ultra
        </h1>
        <p className='text-sm md:text-lg text-slate-500'>
          Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge
          display.
        </p>
        <span className='text-md md:text-xl font-semibold text-slate-800'>
          Price: $ 999.99
        </span>
      </div>
      <Button
        variant={'ghost'}
        className='rounded-full w-10 h-10 bg-slate-50/25 text-white absolute top-4 right-4 md:static md:border md:border-red-500 md:bg-transparent md:text-slate-900 md:ml-auto'
      >
        X
      </Button>
    </div>
  )
}

export default CartItem
