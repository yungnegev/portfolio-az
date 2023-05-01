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
    SiNodedotjs,
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
    <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <m.div  
            style={{scaleY: scrollYProgress}}
            className='absolute left-9 top-0 w-[4px] h-full bg-zinc-950 origin-top md:w-[2px] md:left-[30px] xs:left-[20px]'
            />
        <ul className='flex flex-col items-start justify-between ml-4 gap-20 md:text-sm xs:ml-2'>
            <li ref={ref1} className='flex mx-auto flex-col gap-4 w-[60%] md:w-[80%] justify-between'>
                <LiIcon reference={ref1}/>
                <m.div 
                    className='flex gap-4'
                    initial={{y: 50}}
                    whileInView={{y: 0}}
                    transition={{duration: 0.5, type: 'spring'}}
                    viewport={{ once: true }}
                    >
                    <SiHtml5 size={32}/>
                    <SiCss3 size={32}/>
                    <SiJavascript size={32}/>
                </m.div>
                <m.div 
                    initial={{y: 50}}
                    whileInView={{y: 0}}
                    transition={{duration: 0.5, type: 'spring'}}
                    viewport={{ once: true }}
                    >
                    HTML, CSS & JS are the backbone of the internet. Even though most of modern web development is done through frameworks, a deep understanding of these fundamental technologies is essential for any developer.
                </m.div>
            </li>

            <li ref={ref2} className='flex flex-col mx-auto gap-4 w-[60%] md:w-[80%] justify-between'>
                <LiIcon reference={ref2}/>
                <m.div 
                    initial={{y: 50}}
                    whileInView={{y: 0}}
                    transition={{duration: 0.5, type: 'spring'}} 
                    viewport={{ once: true }} 
                    className='flex gap-4'
                    >
                    <SiTypescript size={32}/>
                    <SiSass size={32}/>
                    <SiTailwindcss size={32}/>
                </m.div>
                <m.div
                    initial={{y: 50}}
                    whileInView={{y: 0}}
                    transition={{duration: 0.5, type: 'spring'}} 
                    viewport={{ once: true }} 
                    >
                    Typescript allows me to make my code more predictable and safe. I use CSS pre-processors such as SASS or Tailwind to improve the quality of my work when writing out styles. 
                </m.div>
            </li>

            <li ref={ref3} className='flex flex-col mx-auto gap-4 w-[60%] md:w-[80%] justify-between'>
                <LiIcon reference={ref3}/>
                <m.div 
                    className='flex gap-4'
                    initial={{y: 50}}
                    whileInView={{y: 0}}
                    transition={{duration: 0.5, type: 'spring'}}  
                    viewport={{ once: true }}
                    >
                    <SiReact size={32}/>
                    <SiRedux size={32}/>
                    <SiVite size={32}/>
                    <SiNextdotjs size={32}/>
                    <SiWebpack size={32} />
                </m.div>
                <m.div
                    initial={{y: 50}}
                    whileInView={{y: 0}}
                    transition={{duration: 0.5, type: 'spring'}}  
                    viewport={{ once: true }}
                    >
                    The modern web development environment is comprised of build tools and frameworks, on the front end, I use are React and Next.js, a meta-framework built on top of react. As for build tools I have worked with Webpack and VIte. For complex state management needs I use Redux and RTK.
                </m.div>
            </li>

            <li ref={ref4} className='flex flex-col mx-auto gap-4 w-[60%] md:w-[80%] justify-between'>
                <LiIcon reference={ref4}/>
                <m.div 
                    initial={{y: 50}}
                    whileInView={{y: 0}}
                    transition={{duration: 0.5, type: 'spring'}} 
                    viewport={{ once: true }} 
                    className='flex gap-4'
                    >
                    <SiNodedotjs size={32}/>   
                    <SiMongodb size={32}/>
                    <SiTrpc size={32}/>
                    <SiPrisma size={32}/>
                    <SiVercel size={32}/>
                </m.div>
                <m.div
                    initial={{y: 50}}
                    whileInView={{y: 0}}
                    transition={{duration: 0.5, type: 'spring'}} 
                    viewport={{ once: true }} 
                >
                    For the back-end I tend to use Node and Express as well as Mongodb or an SQL database with the Prisma ORM. For my Next.js projects I also use tRPC and deploy on vercel.
                </m.div>
            </li>

            <li ref={ref5} className='flex flex-col mx-auto gap-4 w-[60%] md:w-[80%] justify-between'>
                <LiIcon reference={ref5}/>
                <m.div 
                    className='flex gap-4'
                    initial={{y: 50}}
                    whileInView={{y: 0}}
                    transition={{duration: 0.5, type: 'spring'}}
                    viewport={{ once: true }}  
                    >
                    <SiGnubash size={32}/>
                    <SiNginx size={32}/>
                    <SiNeovim size={32}/>
                    <SiDocker size={32}/>
                    <SiGit size={32}/>
                </m.div>
                <m.div
                    initial={{y: 50}}
                    whileInView={{y: 0}}
                    transition={{duration: 0.5, type: 'spring'}} 
                    viewport={{ once: true }}           
                    >
                    I have always been interested in Linux, I am comfortable with terminal commands and bash scripts, I use neovim as one of my editors and am proficient at git and docker.
                </m.div>
            </li>
        </ul>
    </div>
  )
}

export default Ribbon