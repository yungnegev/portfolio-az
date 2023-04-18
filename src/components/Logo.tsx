import Link from 'next/link'
import React from 'react'
import { motion as m } from 'framer-motion'

const Logo = () => {
  return (
    <div className='flex justify-center items-center mt-2'>
        <Link 
            href='/'
            className='flex justify-center items-center w-16 h-16 text-white bg-zinc-950 rounded-full
                      font-thin tracking-widest text-2xl'   
            >
                AZ
        </Link>
    </div>
  )
}

export default Logo