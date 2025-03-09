"use client"
import { AnimatePresence, motion } from "framer-motion";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import brand from '../../public/Brand-2 1.png';
import MarCom from '../../public/Comm-2 1.png';
import Experience from '../../public/Experience-2 1.png';
import research from '../../public/Research-2 1.png';
import Strategy from '../../public/Strategy-2 1.png';
import BlurImage from './BlurImage';
import DotAndColor from './DotAndColor';
const CardItems=[
    {
        id:1, 
        title:'Research', 
        description:'Research is used to explore, create, and deliver value to meet the needs of a particular target market through data collection, analysis, and interpretation..', 
        icon:research 
    }, 
    
    {
        id:2, 
        title:'Strategy', 
        description:'Strategy is the plan to create, promote, and distribute products or services for a target market',
         icon:Strategy 
    }, 
    {
        id:3, 
        title:'Branding', 
        description:'Branding creates a unique identity, image, and reputation for a product or company that sets it apart, and engenders positive feelings among consumers.',
         icon:brand 
    }, 
    {
        id:4, 
        title:'Experience', 
        description:'Professionals build skills and knowledge to create effective strategies, understand target markets, and deliver customer value.',
         icon:Experience
    }, 
        

]

const Services = () => {
 
      
      
    const [cards, setCards] = useState([...CardItems]);

    useEffect(() => {
      const interval = setInterval(() => {
        setCards((prevCards) => {
          const newCards = [...prevCards];
          
          // Select two random indices to swap
          const index1 = Math.floor(Math.random() * newCards.length);
          let index2;
          do {
            index2 = Math.floor(Math.random() * newCards.length);
          } while (index1 === index2); // Ensure index2 is different
  
          // Swap the selected cards
          [newCards[index1], newCards[index2]] = [newCards[index2], newCards[index1]];
  
          return [...newCards];
        });
      }, 5000); 
  
      return () => clearInterval(interval); // Cleanup on unmount
    }, []);
        
    return (
    <div id='services' className='relative'> 
              <DotAndColor />
         <div className="custom-padding ">
            
             <div className="flex items-start justify-between pt-[10rem] max-sm:pt-[2rem] max-sm:flex-col max-lg:flex-col">
                <div className="w-[20%] max-sm:w-[100%] max-md:w-[100%] max-lg:w-full">
                <h2 className="text-white font-weight-600 text-[32px]">Our Services</h2>
                </div>
                <div className="w-[80%] max-lg:w-[100%] max-sm:w-full max-xs:w-full flex justify-start items-center max-md:justify-between flex-wrap max-sm:flex-col ">
                <AnimatePresence mode="popLayout">
                    {cards.map((item)=>(
                        <motion.div key={item.id} className=" bg-[#E9E7E7] p-4 m-4 flex flex-col justify-center items-center my-[16px]  w-[38%] max-md:w-full h-[275px] gap-6 flex-grow "
                        layout 
                        initial={{ opacity: 0, scale: 0.2 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.2 }}
                        transition={{ duration: 0.2, type: "spring", stiffness: 50 }}
                        >
                            <div className="w-full h-auto pt-6 mt-10 flex items-center justify-center">
                                <Image src={item.icon} alt={item.title} width={50} height={50} />
                            </div>
                            <h3 className="text-black text-center font-weight-600 text-[24px]">{item.title}</h3>
                            <p className="text-black max-w-fit-content max-h-fit-content font-weight-300 text-[16px] text-center p-[16px] ">{item.description}</p>
                        </motion.div>
                    ))}
                    </AnimatePresence>
                    <div className="w-full bg-[#E9E7E7] p-4 m-4 flex flex-col justify-center items-center my-[16px] h-[275px] gap-6  ">
                         <Image src={MarCom} alt="Marketing Communication" width={100} height={100} />
                         <h3 className="text-black text-ce font-weight-600 text-[24px]">MarCom</h3>
                         <p className="text-black font-weight-300 text-[14px] text-center pb-4">Marketing Communications. It’s all about effective communication between a company and its target audience. It helps build brand awareness, trust, and customer relationships..</p>
                    </div>
                </div>
             </div>
        </div>
        <BlurImage />
    </div>
              
   )
}

export default Services;

