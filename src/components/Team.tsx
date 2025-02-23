"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ceo from "../../public/2CEO-3 1.png";
import team from "../../public/team.webp";
import { whyChooseusCenterContent } from "../constant/index";
import LineSvg from './LineSvg';
const Team = () => {
    const [curentIndex, setcurentIndex] = useState(0);

    useEffect(() => {
          const interval=setInterval(()=>{
             setcurentIndex((prevIndex)=>{
                const nextIndex = (prevIndex + 1) % whyChooseusCenterContent.length;
                return nextIndex;
             })
          },2000)
            return()=>clearInterval(interval)
    }, []);
    
    return (
        <div className='custom-padding relative'>
            <p className="text-white">Thurayabiz Stars</p>
            <h2 className="text-white font-weight-600 text-[32px] pb-5">Aiming to the Stars</h2>
            <div>
                <Image src={team} alt='team' width={2048} height={1152} style={{width: "auto", height: "auto"}} />
            </div>
            <div className="flex w-full items-center max-md:flex-col justify-center relative pt-10">
                <div className="flex justify-start items-center gap-2 w-full max-lg:w-[50vw] relative overflow-hidden">
                    <Image src={ceo} alt="CEO" width={1080} height={1080} style={{width: "auto", height: "auto"}} />
                    <div className="w-[80%] h-full  bg-starRectangle bg-cover bg-center bg-no-repeat rounded-5 absolute left-[3.5rem] bottom-0  mx-auto  z-0" />
                     <h5 className='text-white absolute bottom-6 text-center w-full  items-center mx-auto text-[32px]'>Ahmed Ibrahim</h5>
                    <p className='text-white absolute bottom-1 text-center w-full  items-center mx-auto text-[16px]'>CEO @THURAYAbiz</p>
                </div>
                <div>
                
                <div className='flex justify-start items-center gap-2 w-full max-lg:w-[50vw] relative overflow-hidden'>

                    <Image src={whyChooseusCenterContent[curentIndex]?.img} height={1080} width={1080} style={{width: "auto", height: "auto"}} alt="name"  
                    className={`  transition-opacity duration-3000 ease-in-out ${whyChooseusCenterContent[curentIndex] === curentIndex ? 'opacity-100' : 'opacity-0.5'}`} />  
                     <div className="w-[80%] h-full  bg-starRectangle bg-cover bg-center bg-no-repeat rounded-5 absolute left-[3.5rem] bottom-0  mx-auto  z-0" />
                     <h5 className='text-white absolute bottom-6 text-center w-full  items-center mx-auto text-[32px]'>{whyChooseusCenterContent[curentIndex]?.name}</h5>
                    <p className='text-white absolute bottom-1 text-center w-full  items-center mx-auto text-[16px]'>{whyChooseusCenterContent[curentIndex]?.designation}</p>
                  </div>
                </div>
            
            </div>
            <div className="absolute -bottom-20 left-0 right-0 w-full overflow-hidden ">
              <LineSvg />
          </div>
        </div>
    );
};

export default Team;