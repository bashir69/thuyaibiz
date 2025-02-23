import { animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

const CounterUp = ({ from, to, text }) => {
  const [count, setCount] = useState(from);

  const ref = useRef();

  const isInView = useInView(ref);

  useEffect(() => {
    const animation = animate(from, to, {
      duration: 4,
      ease: "easeOut",
      onUpdate: (prev) => {
        setCount(Math.floor(prev));
      },
    });

    return () => animation.cancel();
  }, [isInView, from, to]);

  return (
    
        <div ref={ref} className='flex items-start justify-start flex-col flex-grow w-[25%]'>
            <h3 className='text-[91px] font-semibold'>{count} <span className="ml-1">+</span></h3>
            <p className='text-[14px] -mt-4'>{text}</p>
        </div>
   
  );
};

export default CounterUp;