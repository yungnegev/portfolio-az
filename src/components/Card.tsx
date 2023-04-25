import React from 'react'
import type { StaticImageData } from "next/image"
import Image from "next/image"
import Link from "next/link"
import { AiFillGithub } from 'react-icons/ai'
import { motion as m } from 'framer-motion'


interface CardProps {
    type: string,
    title: string,
    summary: string,
    img: StaticImageData,
    link: string,
    github: string,
}
  


const Card = (props: CardProps) => {

  const MLink = m(Link)

  return (
    <article className='w-full max-w-[480px] h-[660px] flex flex-col gap-4 items-center justify-between rounded-3xl border-2 
                          border-solid border-zinc-950 shadow-2xl p-12 relative bg-[#F8F0E3] dark:bg-zinc-800 dark:text-white'>
        {/* shadow div */}
        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-zinc-900'/>
  
        <Link 
          href={props.link} 
          target='_blank'
          className='w-full cursor-pointer overflow-hidden rounded-lg'
          >
          <Image src={props.img} placeholder='blur' alt={props.title} className='w-full h-auto border-solid border-2 border-zinc-950 overflow-none rounded-lg'/>
        </Link>
  
        <div className='w-full flex flex-col items-start justify-between gap-4'>
          <Link href={props.link} target='_blank' className='hover:underline underline-offset-4'>
            <h2 className='w-full text-left text-3xl'>{props.title}</h2>
          </Link>
          <span className='text-[#be274c] dark:text-[#5eead4] text-xl'>{props.type}</span>
          <p>{props.summary}</p>
          <div className='flex gap-4 items-center mt-4'>
            <Link href={props.github} target='_blank'>
              <AiFillGithub size={36}/>
            </Link>
            <MLink 
              href={props.link} 
              target='_blank' 
              className='ml-4 rounded-lg bg-zinc-950 p-1 px-6 text-lg text-white'
              whileHover={{
                backgroundColor:["#09090b", "#5eead4","#fcd34d","#be274c", "#09090b"],
              }}
              >
              Preview
            </MLink>
          </div>
        </div>
  
      </article>
  )
}

export default Card