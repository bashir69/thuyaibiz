
import Image from "next/image";
import Link from "next/link";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import iconBg from "../../public/Subtract.png";
import HeroSvg from "./HeroSvg";
const Hero = () => {
    return (
        <div className='relative'>
            <div className="xl:pl-[150px] xl:pr-[150px] md:pl-[150px] md:pr-[150px]  sm:pr-[50px] sm:pl-[50px] flex items-center  h-[100vh]">
              <div className=" flex justify-between items-center">
              <div className="flex flex-col items-start mt-[150px] ">
               <h1 className='text-white font-extrabold text-[143px] mt-10 xl:text-[120px] md:text-[90px] sm:text-[65px] py-3 '>Let’s ReThink</h1>
            
               <p className="text-white  text-[16px] -mt-6">We are a boutique agency that gets thinks done</p>
               <div className="flex justify-center items-center gap-2 pt-10">
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
                 <div className="absolute right-0 pr-[150px] ">
                     <div  className="relative w-full h-full flex justify-center items-center">
                         <Image src={iconBg}  alt="bg-icons" width={80} height={80} />
                         <ul className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                            <Link href="https://www.instagram.com/thurayabiz/#" target='_blank'><FaInstagramSquare className="text-white mb-2 text-[32px]" /></Link>
                            <Link href="https://www.linkedin.com/company/thurayabiz/" target='_blank'><IoLogoLinkedin className="text-white  text-[32px] my-5 " /></Link>
                            <Link href="https://x.com/thurayabiz?mx=2" target='_blank'><FaSquareTwitter className="text-white mb-2 text-[32px]" /></Link>
                         </ul>
                        
                     </div>
                 </div>
              </div>
            </div>
           <div className="absolute inset-0  -z-10">
              <HeroSvg />
           </div>           
        </div>
    );
};

export default Hero;