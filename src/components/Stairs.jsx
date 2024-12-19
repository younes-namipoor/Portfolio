import React from 'react'
import { animate , motion } from 'motion/react';
const stairAnimation = {
    initial:{
        top:"0%",
    },
    animate:{
        top:"100%",
    },
    exit:{
        top:["100%" , "0%"],
    },
}
const indexRevers = (index)=>{
    const totalStep = "6";
    
    return totalStep - index -1;
};
export default function Stairs() {
    
  return (
    <>
    {[...Array(6)].map((_,index)=>{
       
        
       return (
       <motion.div key={index} variants={stairAnimation} initial="initial" animate="animate" exit="exit" transition={{
            duration:0.4 ,
            ease:"easeInOut",
            delay:indexRevers(index) * 0.1,
        }}
        className='h-full w-full bg-white relative'
        />
    );
    })}
    </>
  )
}
