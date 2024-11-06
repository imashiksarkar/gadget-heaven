import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useCart } from '@/context/CartContextProvider'
import { useWishlist } from '@/context/WishlistContextProvider'
import { fetchProductById } from '@/services/productService'
import ReactStars from 'react-rating-stars-component'
import { Params, useLoaderData } from 'react-router-dom'

const ProductDetails = () => {
  const product = useLoaderData() as Awaited<ReturnType<typeof loader>>
  if (!product) throw new Error('Invalid product id.')

  const { addToCart } = useCart()
  const { addToWishlist } = useWishlist()

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      description: product.description,
      image: product.image,
      price: product.price,
    })
  }
  const handleAddToWishlist = () => {
    addToWishlist({
      id: product.id,
      name: product.name,
      description: product.description,
      image: product.image,
      price: product.price,
    })
  }

  return (
    <section>
      <div className='con'>
        <div className='product-detail p-4 rounded-xl bg-white grid md:grid-cols-[3fr_4fr]  gap-6'>
          <figure className='product__image rounded-xl overflow-hidden'>
            <img
              className='w-full h-full object-cover'
              src={product.image}
              alt={product.name}
            />
          </figure>
          <div className='product__descriptions flex flex-col gap-4'>
            <h1 className='text-[28px] font-semibold'>{product.name}</h1>
            <p className='font-semibold text-xl'>Price: ${product.price}</p>
            <Badge className='w-max bg-transparent border border-lime-500 text-lime-500 text-md font-semibold'>
              In Stock
            </Badge>
            <p className='text-lg text-gray-500'>{product.description}</p>

            <div>
              <p className='text-lg font-bold'>Specifications:</p>
              <ul className='text-gray-500 list-decimal ml-5 mt-2'>
                {product.specifications.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <p>Rating: ⭐</p>
              <span className='flex items-center gap-4'>
                <ReactStars
                  count={5}
                  size={25}
                  isHalf={true}
                  activeColor='#ffd700'
                  value={product.rating}
                />

                <Badge className='text-md bg-slate-200 text-slate-800'>
                  {product.rating}
                </Badge>
              </span>
            </div>

            <div>
              <Button
                onClick={handleAddToCart}
                variant={'outline'}
                className='rounded-full bg-[#8934CF] hover:bg-[#8934CF] hover:text-white text-white text-xl font-bold me-6'
              >
                <span>Add To Cart</span>

                <img
                  className='h-full aspect-square'
                  src='/cart-white.png'
                  alt='wishlist'
                />
              </Button>
              <Button
                onClick={handleAddToWishlist}
                variant={'outline'}
                className='rounded-full p-2 aspect-square  text-slate-800 text-xl font-bold'
              >
                <img
                  className='w-full'
                  src='/wishlist-icon.png'
                  alt='wishlist'
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export const loader = async ({ params }: { params: Params<'productId'> }) => {
  return await fetchProductById(params.productId || '')
}

export default ProductDetails
