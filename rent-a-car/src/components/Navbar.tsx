import { AiOutlineCar } from 'react-icons/ai';
import Link from 'next/link';
import { Logo } from './Logo';
import { Button } from './Button';
 
export const Navbar = ( ) => {
  return (
    <>
     <nav className="flex items-center justify-between flex-wrap bg-green-800 py-2 px-10">
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
                <p>Sign in</p>
                <Button innerText='Register'/>
            </div>
     </nav>
    </>
   
  )
}
 