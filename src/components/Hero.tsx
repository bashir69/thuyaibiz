"use client"
import Image from "next/image";
import Link from "next/link";

import { useEffect, useRef, useState } from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import ellipse from "../../public/Ellipse.png";
import iconBg from "../../public/Subtract.png";
import Speech from "./Speech";
const Hero = () => {
  const itemRef = useRef(null);
  const [topOffset, setTopOffset] = useState(0);

  useEffect(() => {
    const centerItem = () => {
      if (itemRef.current) {
        const itemHeight = itemRef.current.getBoundingClientRect().height;
        const windowHeight = window.innerHeight;
        setTopOffset((windowHeight - itemHeight) / 10); // Center it
      }
    };

    centerItem(); // Run once on mount
    window.addEventListener("resize", centerItem); // Update on resize

    return () => window.removeEventListener("resize", centerItem); // Cleanup
  }, [])
 
    return (
        <div ref={itemRef} className='relative '>
            {/* hero bg */}
            <div className="bg-heroBg absolute inset-0 bg-cover bg-center max-h-screen bg-no-repeat z-0 h-full  max-sm:h-full w-full" />
            <div  className="custom-padding flex items-center ">
              <div className=" grid grid-cols-1 max-md:grid-cols-1 max-sm:grid-cols-1 max-xs:grid-cols-1">
              <div className="flex flex-col items-start mt-[200px] z-50">
               {/* <h1 className='text-white font-extrabold text-[143px] mt-10 xl:text-[120px] md:text-[90px] sm:text-[65px] py-3 '>Let’s ReThink</h1> */}
               <h1 className='text-white font-normal text-[148px] mt-10 xl:text-[148px] md:text-[70px] sm:text-[48px] xs:text-[40px] py-3 w-full'><Speech /></h1>
               
               <p className="text-white  text-[16px] py-6 ">We are a boutique agency that gets thinks done</p>
               <div className="flex justify-center items-center gap-2  py-[40px]">
               <div className="bg-black w-[118px] h-[48px] rounded-[32px] relative ">
                     <div className="overflow-hidden flex items-center m-auto cursor-pointer justify-center w-[90px] h-[48px] ">
                   
                  <Link href='/'>
                  <video
                      src="http://localhost:3000/gathers.mp4"
                       autoPlay
                       loop
                       muted
                      className="w-[80px] h-[48px]" 
                    />
                  </Link>
                     </div>
                </div>
                 <p className="text-[16px] text-white">Check  out our reel</p>
               </div>
               </div>
               {/* Social Link */}
                 <div className="absolute right-0 pr-[150px] top-[48%] z-10 xs:pr-[0px] sm:pr-[50px] md:pr-[150px] lg:pr-[150px] xl:pr-[150px]">
                     <div  className="relative w-full h-full flex justify-center items-center">
                         <Image src={iconBg}  alt="bg-icons" width={80} height={80} />
                         <ul className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                            <Link href="https://www.instagram.com/thurayabiz/#" target='_blank'><FaInstagramSquare className="text-white mb-2 text-[32px]" /></Link>
                            <Link href="https://www.linkedin.com/company/thurayabiz/" target='_blank'><IoLogoLinkedin className="text-white  text-[32px] my-5 " /></Link>
                            <Link href="https://x.com/thurayabiz?mx=2" target='_blank'><FaSquareXTwitter className="text-white mb-2 text-[32px]" /></Link>
                         </ul>
                        
                     </div>
                 </div>
              </div>
            </div>
          
          
          
           <div style={{  top: `${topOffset}px`,  transform: "translateY(20%)" }} className={`absolute right-3  bottom-0  z-10  `}>
            <Image className="moveRightToLeft" src={ellipse} height={25} width={25} alt="ellipse" />
             {/* <CurvedAnimation /> */}
           </div>  
           <div style={{  top: `${topOffset}px`,  transform: "translateY(70%)" }} className={`absolute right-3  bottom-0  z-10 mix-blend-multiply `}>
            <Image className="moveRightToLeft" src={ellipse} height={35} width={35} alt="ellipse" />
             {/* <CurvedAnimation /> */}
           </div>  
           <div style={{  top: `${topOffset}px`,  transform: "translateY(65%)" }} className={`absolute right-32  bottom-0  z-10 mix-blend-multiply `}>
            <Image className="moveRightToLeft" src={ellipse} height={32} width={32} alt="ellipse" />
             {/* <CurvedAnimation /> */}
           </div>  
           <div style={{  top: `${topOffset}px`,  transform: "translateY(35%)" }} className={`absolute right-[20rem]  bottom-0  z-10 mix-blend-multiply `}>
            <Image className="moveRightToLeft" src={ellipse} height={30} width={30} alt="ellipse" />
             {/* <CurvedAnimation /> */}
           </div>  

        </div>
    );
};

export default Hero;