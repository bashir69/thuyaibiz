"use client"
import { motion } from "framer-motion";

import Image from 'next/image';
import { useState } from "react";
import imag2 from '../../public/mctleading.png';
import imag5 from '../../public/musandam.png';
import imag1 from '../../public/omandb.png';
import imag4 from '../../public/omanvision.png';
import imag3 from '../../public/rakeeza.png';
const cards = [
   {id:1, 
    img:imag1, 
    title:'OmanDB',
     desc:'OmanDB is a leading provider of business intelligence and data analytics solutions in Oman.'
    },
   {id:2, 
    img:imag2, 
    title:'Muscat Leading',
     desc:'OmanDB is a leading provider of business intelligence and data analytics solutions in Oman.'
    },
   {id:3, 
    img:imag3, 
    title:'Rakeez',
     desc:'OmanDB is a leading provider of business intelligence and data analytics solutions in Oman.'
    },
   {id:4, 
    img:imag4, 
    title:'Oman Vision',
     desc:'OmanDB is a leading provider of business intelligence and data analytics solutions in Oman.'
    },
   {id:5, 
    img:imag5, 
    title:'Musamdam',
     desc:'OmanDB is a leading provider of business intelligence and data analytics solutions in Oman.'
    },
];

export default function Project({showGrid}) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <>
    {showGrid ? <div className="flex  items-center justify-center gap-6 w-full h-[300px]  bg-[#121111] text-white">
      {cards.map((card, index) => (
          <div 
            key={index} 
            className="w-full h-full mx-2  text-white flex items-center justify-center text-lg font-bold rounded-xl shadow-lg"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <Image src={card.img} alt={card.title} height={500} width={500} className="w-auto"   style={{ width: "auto", height: "auto" }}/>
          </div>
        ))}
      </div> :<div className="relative w-full overflow-hidden p-4">
      <motion.div
        className="flex w-max "
        animate={isPaused ? {} : { x: ["0%", "-10%"] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {[...cards,...cards,...cards].map((card, index) => (
          <div 
            key={index} 
            className={`${isPaused === true ? "cursor-pointer" : ""} w-full h-full mx-2  text-white flex items-center justify-center text-lg font-bold rounded-xl shadow-lg`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <Image src={card.img} alt={card.title} height={300} width={300} className="max-sm:w-[300px] max-sm:h-[300px]"   />
          </div>
        ))}
      </motion.div>
    </div> }
    
    </>
  );
}
