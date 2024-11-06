import CartItem from '@/components/Cart/CartItem'

const Order = () => {
  return (
    <section>
      <header className='bg-[#9538E2] py-8'>
        <div className='con flex flex-col items-center text-white'>
          <h1 className='text-3xl font-bold'>Your Orders</h1>
          <p className='mt-2 max-w-[65ch] text-center leading-7'>
            Here is the list of items that you ordered since ever.
          </p>
        </div>
      </header>

      <div className='con mt-10'>
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

export default Order
