import { Button } from '@/components/ui/button'

const Home = () => {
  return (
    <section className='home-page'>
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
  )
}

export default Home
