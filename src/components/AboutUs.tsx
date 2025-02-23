"use client"
import { motion } from "motion/react";
import Link from "next/link";
import { useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";

import DotAndColor from "./DotAndColor";
import LineSvg from "./LineSvg";
const AboutUs = () => {
  const aboutRef = useRef(null);
  const text = `Our journey began with a passion for,
visual storytelling and a commitment to, 
turning ideas into impactful designs,
 With a team of dedicated professionals, we've 
honed our skills to deliver exceptional
 results for our clients.`;

  const sentences = text.split(", ");
    return (
        <div ref={aboutRef} className='relative  '>
            <div className='custom-padding '>
                <DotAndColor />
                <motion.div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4 pt-[10rem] max-sm:pt-[2rem] w-full">
                   <div className="max-w-fit col-span-1 max-sm:col-span-12 max-sm:w-full">
                     <h2 className="text-white font-weight-600 text-[32px] max-content max-sm:w-full">What we do</h2>
                   </div>
                   <div className="max-w-fit col-span-11">
                   {sentences.map((sentence, index) => (
                     <motion.p
                          key={index}
                         className="text-[24px] w-full  md:text-[48px] xl:text-[48px] max-sm:text-[16px]  font-weight-300 text-normal text-gray-300 leading-20 "
                          initial={{ opacity: 0, y: 3 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}>
                        {sentence}
                     </motion.p>
                     ))}
                   <div className="flex items-center justify-start gap-2 ">
                    <Link href="/about" className="text-white text-[1rem] mt-6 underline">About </Link>
                   <span className="text-white mt-7 text-[24px]"><GoArrowUpRight /></span>
                   </div>
                      
                  
                   </div>
                </motion.div>
            </div>
           <div className="absolute -bottom-20 left-0 right-0 w-full overflow-hidden ">
              <LineSvg />
          </div>
        </div>
    );
};

export default AboutUs;