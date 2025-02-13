
import { CgMenuGridR } from "react-icons/cg";
import Project from './Project';
const Portfolio = () => {
    return (
        <div className='relative bg-[#121111] mix-blend-luminosity'>
           <div className="pr-[150px] pl-[150px]">
             <div className="flex items-center justify-between">
            <div className="py-[40px]" >
              <h1 className="text-white text-[48px] font-semibold ">Selected Project</h1>
              <p className="text-white">-Our Portfolio of Success</p>
            </div>
             <div className="cursor-pointer" >
             <CgMenuGridR className="text-white text-[32px]" />
             </div>
             </div>
           </div>
           <div className=" flex ">
              <Project />
             
            
           </div>


        </div>
    );
};

export default Portfolio;