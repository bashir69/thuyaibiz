'use client'
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from 'react';

import Image from "next/image";
import { FaLinkedin, FaSquarePhone, FaSquareXTwitter } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { MdEmail, MdWatchLater } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import logo from '../../public/THURAYAbiz-logo-04.png';
import ScrollHandler from './ScrollHandler';
const Footer = () => {
   const [show, setShow] = useState(false)
   const [isScrolled, setIsScrolled] = useState(false);
const targetRef = useRef(null);
const handleScrollAboveThreshold = () => {
  setIsScrolled(true);
};

const handleScrollBelowThreshold = () => {
  setIsScrolled(false);
};




useEffect(()=>{
 window.addEventListener('scroll', ()=>{
   if(window.scrollY > 100){
     setShow(true)
   }else{
     setShow(false)
   }
   return()=>{
  
    window.removeEventListener('scroll') 
  }
 })

},[])

  return (
    <footer ref={targetRef} className='w-full pt-10 relative bg-white '>
      <ScrollHandler 
    threshold={targetRef}
    onScrollAboveThreshold={handleScrollAboveThreshold}
    onScrollBelowThreshold={handleScrollBelowThreshold}

/>
<AnimatePresence mode='awit'>

         <motion.div 
          initial={{ y: 25, opacity: 0 } }
            animate={isScrolled === true ? { y: 0, opacity: 1 } : null}
            exit={!isScrolled === true ? { y: -25, opacity: 0 } : null}
            transition={!isScrolled === true ? { duration: 0.8 }: null}
         className="custom-padding ">
         <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-xs:grid-cols-1 ">
         {/* first Section */}
              <div className="col-span1">
                <Image src={logo} width="100%" height="100%" alt='Logo' />
                 
              </div>
              {/* Middle Section */}
              <div className="col-span1 ml-10">
                  <h5 className='text-[24px] font-weight-400 pb-[13px] text-[#070707]'>Contact Information</h5>
                  <div className="flex justify-start items-start  gap-y-3 flex-col">
                      <div className='relative flex justify-start items-center gap-x-3 pb-4 text-[#070707]'>
                      <IoLocation className="text-[16px]" />
                    <p className='text-[16px] font-raleway font-medium'>18th November street Azaiba, Muscat, Oman</p>

                     </div>
                
                     <div className='relative flex justify-start items-center gap-x-3 
                     pb-4 text-[#070707]'>
                      <FaSquarePhone className="text-[16px]" />
                       <p className='text-[16px] font-raleway font-medium'>968-000000</p>
                     </div>
                     <div className='relative flex justify-start items-center gap-x-3 pb-4 text-[#070707]'>
                       <MdEmail className="text-[16px]" />

                       <p className='cleanswift@info.com'>thurayabiz@info.com</p>
                     </div>
                     <div className='relative flex justify-start items-center gap-x-3 pb-4 text-[#070707]'>
                        
                         <MdWatchLater className="text-[16px]" />
                        
                       <p className='9.00AM - 6.30 PM'>8.00AM - 5.00 PM</p>
                     </div>
                  </div>
              </div>
              {/* Last Section */}
              <div className="col-span1 ml-10">
              <p className='text-[24px] font-weight-400 leading-8 text-[#070707]  '>Stay connected with <span className='text-yellowColor'>Thurayabiz </span>.</p>
                  <div className="flex flex-start items-center  justify-center gap-x-5 mt-5">
                     <div>
                       <FaSquareXTwitter className="text-[32px] gap-10" />
                     </div>
                     <div>
                       <RiInstagramFill className="text-[32px] gap-10" />
                     </div>
                     <div>
                       <FaLinkedin className="text-[32px] gap-10" />
                     </div>
                  
              </div>
               

              </div>
          </div>
         </motion.div>
</AnimatePresence>
  <div  className='w-full py-[24px] text-center bg-gray-800   absolute bottom-0'>
<pre className='  text-[#998d8d]'>  &copy;{new Date().getFullYear()} All rights reserved @THURAYAbiz</pre>
  </div>
  <a href='#home' className={show === true ? 'back2Top smooth-scroll p-3 z-110' : 'back2Top hide'}>TOP</a>
    </footer>
  )
}

export default Footer