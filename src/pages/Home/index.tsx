import ProductCard from '@/components/ProductCard'
import { Button } from '@/components/ui/button'
import {
  fetchCategoriesNames,
  fetchProductsByCategory,
} from '@/services/productService'
import { Link, LoaderFunctionArgs, useLoaderData } from 'react-router-dom'

const Home = () => {
  const { categories, selectedCategory, products } = useLoaderData() as Awaited<
    ReturnType<typeof loader>
  >

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
              <li>
                <Link
                  to={`/`}
                  className={`category-link block py-2 px-4 rounded-full mt-4 text-lg font-medium ${
                    'all' === selectedCategory
                      ? 'active bg-[#8E36D8] text-white'
                      : 'bg-[#F3F3F3] text-[#67666A]'
                  }`}
                >
                  All products
                </Link>
              </li>
              {categories.map((category) => {
                return (
                  <li key={category.value}>
                    <Link
                      to={`/?category=${category.value}`}
                      className={`category-link block py-2 px-4 rounded-full mt-4 text-lg font-medium ${
                        category.value === selectedCategory
                          ? 'active bg-[#8E36D8] text-white'
                          : 'bg-[#F3F3F3] text-[#67666A]'
                      }`}
                    >
                      {category.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </aside>
          <div className='products__list w-full grid grid-cols-[repeat(auto-fit,minmax(295px,_1fr))] gap-4 justify-items-center'>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                productId={product.id}
                title={product.name}
                description={product.description}
                image={product.image}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const searchParams = new URL(request.url).searchParams
  const selectedCategory = searchParams.get('category')?.trim() || 'all'

  const products = await fetchProductsByCategory(selectedCategory)

  const categories = await fetchCategoriesNames()

  return {
    products,
    categories,
    selectedCategory,
  }
}

export default Home
