"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from 'react';
import logo from "../../public/THURAYAbiz-logo-09.png";
import { navLinks } from "../constant";
const Navbar = () => {
  const [activeNav, setActiveNav] = useState('Home')
  const [scrollDown,setScrollDown] = useState(false)
  const [show, setShow] = useState(false)

 
  useEffect(()=>{
    const handleScrollDwon=()=>{
 if(window?.scrollY >  600){
  setScrollDown(true)
  
}else{
  setScrollDown(false)
}
  }
  window.addEventListener("scroll", handleScrollDwon)
    return ()=> removeEventListener("scroll", handleScrollDwon)
  },[scrollDown])


 function handleShow(){
        setShow(!show)
 }

  return (
 <header className='mt-5 absolute z-20 w-full '>
   <nav className={`${scrollDown === true ? "fixed  justify-between max-lg:m-[-100px] max-sm:m-[-100px]  items-center duration-700 ease-linear delay-100 right-0 left-0 top-0  inline-block gap-10 bg-gray-800" : 
   'flex justify-between items-center custom-padding'}
    flex justify-between items-center custom-padding`}>
        <Link className="cursor-pointer " href='/'>
              <Image src={logo} width={80} height={80} alt='Logo' className=' '  />
    </Link>
       <ul className={`${show === true ? "max-lg:fixed  max-lg:translate-x-[0px] max-lg:w-[45%] h-[50vh] py-[50px] px-[50px] duration-700 ease-linear" : " max-lg:fixed  max-lg:-translate-x-[500px] max-lg:padding-[32px]"} max-lg:fixed duration-700 ease-linear  max-lg:bg-black max-lg:p-12 max-lg:-top-5 max-lg:left-0 max-lg:padding-x-[32px] max-lg:-translate-x-[500px] flex max-lg:flex-col max-lg:justify-start max-lg:items-start  justify-center items-center gap-3  z-10`}>
        {navLinks.map(link=>(
          <li key={link.label} 
          onClick={()=> setActiveNav(link.label)}
          >
             <a href={link.href}
               className={`${link.label === activeNav ? 'text-gray-400  text-[20px]  py-2 px-3 ' : 
               'text-white max-lg:text-[#f3f3f3]   text-[16px] py-2 px-5 max-sm:inline-block text-nowrap max-sm:w-full max-sm:p-0 min-xs:p-6 ' }`}
             >{link.label}</a>
          </li>
        ))}
       </ul>
       <button   className='max-sm:hidden max-md:absolute max-lg:absolute max-md:right-[30%] max-lg:right-[30%] bg-greenColor py-[13px] px-[32px] max-md:px-6 max-md:p-y-[8px] rounded-sm text-[#fefefe] text-[16pxpx] font-semi-bold duration-500 ease-in-out hover:bg-black-500 hover:text-white-300' href="#home" >Let’s Talk</button>
      
        <div  onClick={handleShow}  className="hidden fixed right-[67px] top-[30px] bg-black px-8 py-6 h-10 w-10 rounded-md  max-lg:flex justify-center items-center max-lg:mr-[80px] max-md:mr-[50px] max-sm:mr-[0px] max-xs:mr-[0px] z-50">
         <div className="py-3 hidden fixed right-[47px] top-[50px] bg-black px-8  h-10 w-[60px] rounded-md  max-lg:flex justify-center items-center max-lg:mr-[80px] max-md:mr-[50px] max-sm:mr-[0px] max-xs:mr-[0px]">
           <div className={`${show === true ? "-rotate-45 top-[15px] " : "rotate-0"} absolute top-2 left-4 w-[32px] h-[2px] bg-white first`}></div>
           <div className={`${show === true ? "translate-x-[700px] duration-700" : "translate-x-0 duration-700"} absolute top-4 left-4 w-[32px] h-[2px] bg-white `}></div>
            <div className={`${show  === true ? "rotate-45 top-[15px] " : "rotate-0 "} absolute top-6 left-4 w-[32px] h-[2px] bg-white  last`}></div>  
         </div> 
                
            </div>
   </nav>
 </header>
  )
}

export default Navbar