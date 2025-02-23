import Image from 'next/image';
import dotBg from "../../public/dotgroup.png";
const DotAndColor = () => {
    return (
        <div className="absolute top-0 left-0  ">
        <Image src={dotBg} alt='dotbg' height={500} width={500} />
      </div>
    );
};

export default DotAndColor;