import React, { type RefObject } from 'react'
import { motion as m, useScroll } from 'framer-motion'

interface LiIconProps {
    reference: RefObject<HTMLElement>
}

const LiIcon = (props: LiIconProps) => {
  
  const { scrollYProgress } = useScroll({
        target: props.reference,
        offset: ['center end', 'center center']
  })  

  return (
    <figure className='absolute left-0 stroke-zinc-900 '>
        <svg className='-rotate-90' width='75' height='75' viewBox='0 0 100 100'>
            <circle cx='75' cy='50' r='20' className='stroke-[#be274c] stroke-1 fill-none' />
            <m.circle 
                cx='75' 
                cy='50' 
                r='20' 
                className='stroke-[5px] fill-[#F8F0E3]' 
                style={{
                    pathLength: scrollYProgress
                }}
                />
            <circle cx='75' cy='50' r='10' className='stroke-1 fill-[#be274c]' />
        </svg>
    </figure>
  )
}

export default LiIcon