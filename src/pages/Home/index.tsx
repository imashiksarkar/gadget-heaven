import ProductCard, { type ProductCardProps } from '@/components/ProductCard'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const categories = [
  'All Product',
  'Iphone',
  'MacBook',
  'Smart Watches',
  'Accessories',
  'Phones',
  'Laptops',
]

const product: ProductCardProps = {
  productId: 'aaaaaaaa',
  title: 'Card Title',
  description: 'Card Description',
  image: 'banner.jpg',
}

const Home = () => {
  return (
    <div className='home-page'>
      <section className='hero'>
        <div className='con'>
          <header className='flex flex-col text-center items-center text-white'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold max-w-[25ch] leading-[42px]md:leading-[52px] lg:leading-[72px] mt-4'>
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className='mt-6 leading-6 max-w-[65ch]'>
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <Button className='w-max mt-8 rounded-full bg-white text-[#9137DC] font-bold text-xl'>
              Shop Now
            </Button>
          </header>
          <div className='banner flex justify-center'>
            <figure>
              <img
                className='w-full h-full object-cover rounded-3xl'
                src='/banner.jpg'
                alt='banner'
              />
            </figure>
          </div>
        </div>
      </section>

      <section className='products mt-24'>
        <div className='con grid grid-cols-1 md:grid-cols-[minmax(230px,_2fr)_10fr] justify-items-center gap-4'>
          <h1 className='md:col-span-2 mb-10 text-4xl font-bold'>
            Explore Cutting-Edge Gadgets
          </h1>
          <aside className='category bg-white border w-full rounded-lg p-6 h-max mb-10'>
            <ul>
              {categories.map((category: string) => {
                const categoryVal = category.replace(' ', '_').toLowerCase()

                return (
                  <li key={categoryVal} className=''>
                    <Link
                      to={`/?category=${categoryVal}`}
                      className='bg-[#F3F3F3] block py-2 px-4 rounded-full mt-4 text-lg font-medium text-[#67666A]'
                    >
                      {category}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </aside>
          <div className='products__list w-full grid grid-cols-[repeat(auto-fit,minmax(270px,_1fr))] gap-4 justify-items-center'>
            <ProductCard
              productId={product.productId}
              title={product.title}
              description={product.description}
              image={product.image}
            />
            <ProductCard
              productId={product.productId}
              title={product.title}
              // description={product.description}
              description='lfasuihfsnyusagf asgdtdtaSC YWGDYUGTYDGCTSAFDtcc gysagdgygryuayga dg ygsdsd cgsdga'
              image={product.image}
            />
            <ProductCard
              productId={product.productId}
              title={product.title}
              description={product.description}
              image={product.image}
            />
            <ProductCard
              productId={product.productId}
              title={product.title}
              description={product.description}
              image={product.image}
            />
            <ProductCard
              productId={product.productId}
              title={product.title}
              description={product.description}
              image={product.image}
            />
            <ProductCard
              productId={product.productId}
              title={product.title}
              description={product.description}
              image={product.image}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
