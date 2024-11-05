import CartItem from '../Cart/CartItem'

const Wishlist = () => {
  return (
    <section>
      <div className='con py-8'>
        <header className='text-xl font-bold'>
          <h1 className='grow'>Wishlist</h1>
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

export default Wishlist
