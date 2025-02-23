"use client"
import { useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import Project from './Project';
const Portfolio = () => {
  const [showGrid, setShowGrid] = useState(false);
 
    return (
        <div className='relative '>
           <div className="custom-padding">
             <div className="flex items-center justify-between">
            <div className="py-[40px] max-sm:py-[20px] " >
              <h1 className="text-white text-[32px] max-sm:text-[24px] ">Selected Project</h1>
              <p className="text-white">-Our Portfolio of Success</p>
            </div>
             <div onClick={()=>setShowGrid(!showGrid)} className={` cursor-pointer`} >
             <CgMenuGridR className={`text-white text-[32px] ${showGrid === true ? "rotate-45 animate-pulse" : "rotate-0"}`} />
             </div>
             </div>
           </div>
           <div className=" flex ">
              <Project showGrid={showGrid} />
             
            
           </div>


        </div>
    );
};

export default Portfolio;