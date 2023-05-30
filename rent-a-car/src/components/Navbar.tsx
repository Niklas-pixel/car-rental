import { AiOutlineCar } from 'react-icons/ai';
import { Logo } from './Logo';
import { Button } from './Button';
 
export const Navbar = ( ) => {
  return (
    <>
     <nav className="flex items-center justify-between flex-wrap bg-green-800 p-6">
        <Logo image={AiOutlineCar} title="car" subtitle="rental"/>
        <ul>
            <li><p className="text-green-500">Home</p></li>
            <li><p>About</p></li>
            <li><p>Vehicle Models</p></li>
            <li><p>Testimonials</p></li>
            <li><p>Our Team</p></li>
            <li><p>Contact</p></li>
        </ul>
        <div>
                <p>Sign in</p>
                <Button innerText='Register'/>
            </div>
     </nav>
    </>
   
  )
}
 