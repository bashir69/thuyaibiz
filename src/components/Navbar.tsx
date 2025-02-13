import Image from "next/image";
import Link from "next/link";
import logo from "../../public/THURAYAbiz-logo-09.png";
const Navbar = () => {
    return (
        <div className="w-full bg-transparent absolute">
              
              <nav className="pl-[150px] pr-[150px] flex justify-between items-center  h-[80px]">
              <Link className="cursor-pointer " href='/'>
              <Image src={logo} width={150} height={150} alt='Logo' className='mt-[50px] '  />
              </Link>
           <ul className="flex items-center gap-4 text-white">
            <Link href='/'>Home</Link>
            <Link href='about'>About Us</Link>
            <Link href='/services'>Our Services</Link>
            <Link href='/ourteam'>Our Team</Link>
            <Link href='/contactus'>Contact Us</Link>
       
         
        </ul>  
        </nav>
        </div>
        
    );
};

export default Navbar;