import React from 'react'
import { motion as m } from 'framer-motion'
 
const TransitionEffect = () => {
  return (
    <>
    <m.div 
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#be274c]' 
        initial={{x: "100%", width: "100%"}}
        animate={{x: "0%", width: "0%"}}
        transition={{duration: 0.5, ease: "easeInOut"}}
        />
    <m.div 
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#5eead4]' 
        initial={{x: "100%", width: "100%"}}
        animate={{x: "0%", width: "0%"}}
        transition={{delay: 0.1, duration: 0.5, ease: "easeInOut"}}
        />
    <m.div 
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-zinc-950' 
        initial={{x: "100%", width: "100%"}}
        animate={{x: "0%", width: "0%"}}
        transition={{delay: 0.2, duration: 0.5, ease: "easeInOut"}}
        />
    </>
  )
}

export default TransitionEffect