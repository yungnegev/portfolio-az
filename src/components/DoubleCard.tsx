import type { StaticImageData } from "next/image"
import Image from "next/image"
import Link from "next/link"
import { AiFillGithub } from 'react-icons/ai'
import { motion as m } from 'framer-motion'

interface doubleCardProps {
    type: string,
    title: string,
    summary: string,
    img: StaticImageData,
    link: string,
    github: string,
}
  
  
const CardDouble = ( props: doubleCardProps) => {

    const MLink = m(Link)
  
    return (
      <article className='w-full max-w-[1060px] flex items-center justify-between rounded-3xl border-2 
                          border-solid border-zinc-900 shadow-2xl p-12 relative bg-[#F8F0E3]'>

        {/* shadow div */}
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-zinc-900'/>

        <Link 
          href={props.link} 
          target='_blank'
          className='w-1/2 cursor-pointer overflow-hidden rounded-lg'
          >
          <Image src={props.img} alt={props.title} placeholder='blur' className='w-full h-auto border-solid border-2 border-zinc-900 overflow-none rounded-lg'/>
        </Link>
  
        <div className='w-1/2 flex flex-col items-start justify-between pl-6 gap-4'>
          <Link href={props.link} target='_blank' className='hover:underline underline-offset-4'>
            <h2 className='w-full text-left text-3xl'>{props.title}</h2>
          </Link>
          <span className='text-[#be274c] text-xl'>{props.type}</span>
          <p>{props.summary}</p>
          <div className='flex gap-4 items-center mt-8'>
            <Link href={props.github} target='_blank'>
              <AiFillGithub size={36}/>
            </Link>
            <MLink 
              href={props.link} 
              target='_blank' 
              className='ml-4 rounded-lg bg-zinc-900 p-1 px-6 text-lg text-white'
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

export default CardDouble