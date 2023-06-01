import { AiOutlineCar } from 'react-icons/ai';
import Link from 'next/link';
import { Logo } from './Logo';
import { LinkButton } from './LinkButton';
 
export const Navbar = ( ) => {
  return (
    <>
     <nav className=" flex items-center justify-between flex-wrap bg-transparent py-2 px-20 ">
        <Logo image={AiOutlineCar} title="car" subtitle="rental"/>
        <ul className='flex space-x-8'>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/vehicles">Vehicle Models</Link></li>
            <li><Link href="/testimonials">Testimonials</Link></li>
            <li><Link href="/team">Our Team</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          
        </ul>
        <div className='flex items-center space-x-4'>
                <p >Sign in</p>
                <LinkButton py={2} px={6} path="/"  bgColor="bg-red-700" hBgColor='bg-red-500' innerText='Register' />
            </div>
     </nav>
    </>
   
  )
}
 