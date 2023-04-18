import Link from 'next/link'
import React from 'react'
import { motion as m } from 'framer-motion'



const Logo = () => {

  const MLink = m(Link)

  return (
    <div className='flex justify-center items-center mt-2'>
        <MLink 
            href='/'
            className='flex justify-center items-center w-16 h-16 text-white bg-zinc-950 rounded-full
                      font-thin tracking-widest text-2xl'   
            whileHover={{
                scale: 1.05,
                backgroundColor:["#09090b", "#5eead4","#fcd34d","#be274c", "#09090b"],
            }}
            >
                AZ
        </MLink>
    </div>
  )
}

export default Logo