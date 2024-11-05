import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { NavLink, useLocation } from 'react-router-dom'
import { Badge } from '../ui/badge'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'

const Navbar = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className={`con nav-con ${isHome && 'home'} md:mt-8`}>
      <nav className='flex gap-8 items-center justify-between '>
        <NavLink to='/' className='logo  order-1'>
          <h1 className='font-bold text-xl'>Gadget Heaven</h1>
        </NavLink>

        {/* Hamburger Menu */}
        <div className='order-3 lg:hidden'>
          <NavDrawer />
        </div>

        <NavLinks className='order-2 hidden lg:block' />

        <PopOver className='order-2 lg:order-3 hidden md:block ms-auto lg:m-0' />
      </nav>
    </div>
  )
}

const NavLinks = (prop: Record<string, string>) => {
  return (
    <div {...prop}>
      <ul className='nav-links'>
        <li>
          <NavLink to='/'>
            <Button variant={'link'} size={'lg'}>
              Home
            </Button>
          </NavLink>
        </li>
        <li>
          <NavLink to='/statistics'>
            <Button variant={'link'} size={'lg'}>
              Statistics
            </Button>
          </NavLink>
        </li>
        <li>
          <NavLink to='/dashboard'>
            <Button variant={'link'} size={'lg'}>
              Dashboard
            </Button>
          </NavLink>
        </li>
        <li>
          <NavLink to='/order'>
            <Button variant={'link'} size={'lg'}>
              Order
            </Button>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
const PopOver = (prop: Record<string, string>) => {
  return (
    <div {...prop}>
      <ul className='pop-overs flex items-center gap-8'>
        <li>
          <HoverCard>
            <HoverCardTrigger>
              <div className='relative'>
                <Button
                  variant={'ghost'}
                  className='w-max p-0 m-0 rounded-full'
                >
                  <Avatar className='border p-1.5'>
                    <AvatarImage src='/cart-icon.png' alt='cart-icon' />
                    <AvatarFallback>Cart</AvatarFallback>
                  </Avatar>
                </Button>
                <Badge variant='default' className='absolute -top-1 -right-2'>
                  10
                </Badge>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className='hidden md:block'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus minus vel dolor quisquam consequuntur ipsa laudantium,
              deleniti voluptas aliquid dolorum.
            </HoverCardContent>
          </HoverCard>
        </li>
        <li>
          <HoverCard>
            <HoverCardTrigger>
              <div className='relative'>
                <Button
                  variant={'ghost'}
                  className='w-max p-0 m-0 rounded-full'
                >
                  <Avatar className='border p-1.5'>
                    <AvatarImage src='/wishlist-icon.png' alt='wishlist-icon' />
                    <AvatarFallback>Cart</AvatarFallback>
                  </Avatar>
                </Button>
                <Badge variant='default' className='absolute -top-1 -right-2'>
                  10
                </Badge>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className='hidden md:block'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus minus vel dolor quisquam consequuntur ipsa laudantium,
              deleniti voluptas aliquid dolorum.
            </HoverCardContent>
          </HoverCard>
        </li>
      </ul>
    </div>
  )
}
const NavDrawer = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <span className='hamburger-icon  w-10 rounded-md aspect-square flex items-center justify-center'>
          =
        </span>
      </SheetTrigger>
      <SheetContent>
        <div className='hidden'>
          <SheetHeader>
            <SheetTitle>Mobile Navigation?</SheetTitle>
            <SheetDescription>
              Easier navigation for mobile phone.
            </SheetDescription>
          </SheetHeader>
        </div>

        <div className='flex flex-col items-center gap-5 mt-8'>
          <NavLinks />
          <span className='block md:hidden'>
            <PopOver />
          </span>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default Navbar
