import { useWishlist } from '@/context/WishlistContextProvider'
import CartItem from '../Cart/CartItem'

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist()

  const handleOnClose = (id: string) => {
    removeFromWishlist({
      id,
    })
  }

  const productKeys = Object.keys(wishlist)

  return (
    <section>
      <div className='con py-8'>
        <header className='text-xl font-bold'>
          <h1 className='grow'>Wishlist</h1>
        </header>
      </div>

      <div className='con'>
        <ul className='flex flex-col items-center gap-4'>
          {productKeys.map((productId: string) => {
            const { id, name, description, image, price } = wishlist[productId]

            return (
              <li key={id} className='w-full flex justify-center'>
                <CartItem
                  id={id}
                  name={name}
                  description={description}
                  image={image}
                  price={price}
                  onClose={handleOnClose}
                />
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Wishlist
