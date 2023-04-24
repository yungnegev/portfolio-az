import React, { useRef } from 'react'
import LiIcon from './LiIcon'
import { motion as m, useScroll } from 'framer-motion'
import { 
    SiJavascript, 
    SiHtml5, 
    SiCss3,
    SiTypescript,
    SiSass,
    SiTailwindcss,
    SiReact,
    SiRedux,
    SiNextdotjs,
    SiMongodb,
    SiTrpc,
    SiPrisma,
    SiVite,
    SiVercel,
    SiGnubash,
    SiNeovim,
    SiNginx,
    SiDocker,
    SiGit,
    SiWebpack,
} from 'react-icons/si'

const Ribbon = () => {
  
  const ref = useRef(null) 
  const ref1 = useRef(null)
  const ref2 = useRef(null) 
  const ref3 = useRef(null)
  const ref4 = useRef(null)
  const ref5 = useRef(null)

  const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'center start']
  })  

  return (
    <div ref={ref} className='w-[75%] mx-auto relative'>
        <m.div  
            style={{scaleY: scrollYProgress}}
            className='absolute left-9 top-0 w-[4px] h-full bg-zinc-900 origin-top'
            />
        <ul className='flex flex-col items-start justify-between ml-4 gap-20'>
            <li ref={ref1} className='flex mx-auto flex-col gap-4 w-[60%] justify-between'>
                <LiIcon reference={ref1}/>
                <div className='flex gap-4'>
                    <SiHtml5 size={32}/>
                    <SiCss3 size={32}/>
                    <SiJavascript size={32}/>
                </div>
                <div>
                    HTML, CSS & JS are the backbone of the internet. Even though most of modern web development is done through frameworks, a deep understanding of these fundamental technologies is essential for any developer.
                </div>
            </li>

            <li ref={ref2} className='flex flex-col mx-auto gap-4 w-[60%] justify-between'>
                <LiIcon reference={ref2}/>
                <div className='flex gap-4'>
                    <SiTypescript size={32}/>
                    <SiSass size={32}/>
                    <SiTailwindcss size={32}/>
                </div>
                <div>
                    HTML, CSS & JS are the backbone of the internet. Even though most of modern web development is done through frameworks, a deep understanding of these fundamental technologies is essential for any developer.
                </div>
            </li>

            <li ref={ref3} className='flex flex-col mx-auto gap-4 w-[60%] justify-between'>
                <LiIcon reference={ref3}/>
                <div className='flex gap-4'>
                    <SiReact size={32}/>
                    <SiRedux size={32}/>
                    <SiVite size={32}/>
                    <SiNextdotjs size={32}/>
                    <SiWebpack size={32} />
                </div>
                <div>
                    HTML, CSS & JS are the backbone of the internet. Even though most of modern web development is done through frameworks, a deep understanding of these fundamental technologies is essential for any developer.
                </div>
            </li>

            <li ref={ref4} className='flex flex-col mx-auto gap-4 w-[60%] justify-between'>
                <LiIcon reference={ref4}/>
                <div className='flex gap-4'>
                    <SiMongodb size={32}/>
                    <SiTrpc size={32}/>
                    <SiPrisma size={32}/>
                    <SiVercel size={32}/>
                </div>
                <div>
                    HTML, CSS & JS are the backbone of the internet. Even though most of modern web development is done through frameworks, a deep understanding of these fundamental technologies is essential for any developer.
                </div>
            </li>

            <li ref={ref5} className='flex flex-col mx-auto gap-4 w-[60%] justify-between'>
                <LiIcon reference={ref5}/>
                <div className='flex gap-4'>
                    <SiGnubash size={32}/>
                    <SiNginx size={32}/>
                    <SiNeovim size={32}/>
                    <SiDocker size={32}/>
                    <SiGit size={32}/>
                </div>
                <div>
                    HTML, CSS & JS are the backbone of the internet. Even though most of modern web development is done through frameworks, a deep understanding of these fundamental technologies is essential for any developer.
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Ribbon