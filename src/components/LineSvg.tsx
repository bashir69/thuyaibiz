import Image from 'next/image';
import line from "../../public/Line 4.png";
const LineSvg = () => {
    return (
        <div>
            <Image src={line} alt="line" fill className='w-[100%]' />
        </div>
    );
};

export default LineSvg;