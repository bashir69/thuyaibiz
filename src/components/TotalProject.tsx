"use client"
import Image from "next/image";
import cube from "../../public/cube.png";
import BlurImage from "./BlurImage";
import CounterUp from "./CounterUp";
const TotalProject = () => {
    return (
        <div  className="bg-countBg w-full h-full bg-no-repeat bg-cover bg-center overflow-hidden relative   py-10">
            <div className="custom-padding flex items-center justify-between flex-col h-full">
            <div className='flex items-center justify-center gap-2 flex-row  max-md:flex-col'>
                 <Image src={cube} alt='cube' height="100%" width="100%" className="rotating-image max-sm:w-[100%] max-sm:h-[100%] max-lg:w-[100%] max-lg:h-[100%]  max-md:w-[100%] max-md:h-[100%]  "   />
                 {/* <RotatingImage /> */}
                <div>
                <p className='text-black text-[32px] leading-[60px]'>Dive into THURAYAbiz core - numbers that mirror our dedication, creativity, and pursuit of excellence. These stats offer a glimpse into our design prowess and its real-world impact.</p>
                </div>
             </div>
             <div className='flex justify-start items-start flex-wrap w-full'>
                <CounterUp text="Governmental Projects" from={0} to={32} />
                <CounterUp text="Case Studies" from={0} to={17} />
                <CounterUp text="Workshops & Lectures" from={0} to={175} />
                <CounterUp text="Corporate Projects" from={0} to={123} />
                   
                <div className='flex items-start justify-start flex-col flex-grow w-[25%]'>
                  <h3 className='text-[91px] font-semibold'>1.1m+</h3>
                  <p className='text-[14px] -mt-4'>Working Mins</p>
                </div>
                <CounterUp text="CSR Projects" from={0} to={35} />
                <CounterUp text="Satisfied Clients" from={0} to={58} />
              
    
               
             </div>
            </div>
            <BlurImage />
        </div>
    );
};

export default TotalProject;