"use client"
import Image from 'next/image';
import blurImage from '../../public/blur bg (1).png';
const BlurImage = () => {
    return (
        <div className="absolute right-0  -bottom-[300px] -z-1">
          <Image src={blurImage} alt="blur image" height="100%" width="100%" />
          
      </div>
    );
};

export default BlurImage;