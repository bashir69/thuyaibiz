"use client"
import { TypeAnimation } from 'react-type-animation';

const Speech = () => {
    return (
        <div>
            
            <TypeAnimation
      sequence={[
        1000,
         "Let's ReThink",
        1000, 
          "Let's Re",
        1000,
       
      ]}
      wrapper="h2"
      speed={20}
     deleteSpeed={40}
     style={{  display: 'inline-block', color:'white'}}
      repeat={Infinity} />

    
         
         
        </div>
    );
};

export default Speech;