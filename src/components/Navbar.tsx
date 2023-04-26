import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { motion as m } from 'framer-motion'
import { AiFillGithub } from 'react-icons/ai'
import { TfiClose } from 'react-icons/tfi'
import { CiMenuBurger } from 'react-icons/ci'
import useThemeSwitcher from '~/hooks/useThemeSwitcher'
import Sun from '../../public/icons/sun.svg'
import Moon from '../../public/icons/moon.svg'

interface CustomLinkProps {
    href: string,
    title: string,
    className: string,
    toggle?: () => void
}



const CustomLink = ({ href, title, className }: CustomLinkProps) => {

    const path = useRouter().pathname

    return(
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`bg-zinc-950 dark:bg-white h-[1px] inline-block absolute left-0 -bottom-1
                            group-hover:w-full transition-[width] ease duration-300 
                            ${path === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </Link>
    )
}



const CustomMobileLink = ({ href, title, className, toggle }: CustomLinkProps) => {

    const router = useRouter()

    const handleClick = () => {
        toggle?.()
        void router.push(href)
    }

    return(
        <button className={`${className} relative group text-white dark:text-zinc-950`} onClick={handleClick}>
            {title}

            <span className={`dark:bg-zinc-950 bg-white h-[1px] inline-block absolute left-0 -bottom-1
                            group-hover:w-full transition-[width] ease duration-300 
                            ${router.pathname === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </button>
    )
}



const Navbar = () => {

  const [ mode, setMode ] = useThemeSwitcher()
  const [ isOpen, setIsOpen ] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className='w-full px-32 lg:px-16 md:px-12 sm:px-8 py-8 font-bold flex items-center justify-between select-none dark:bg-zinc-800 dark:text-white relative'>
        
        {/* MOBILE BUTTON */}
        <button onClick={ handleClick } className='hidden lg:flex'>
            {
                isOpen ? <TfiClose size={30} /> : <CiMenuBurger size={30} />
            }
        </button>
        
        {/* LOGO */}
        <div className='absolute left-[50%] top-3 translate-x-[-50%]'>
            <Logo />
        </div>
        
        {/* DESKTOP VERSION */}
        <div className='flex w-full items-center justify-between lg:hidden'>
            <nav>
                <CustomLink href='/' title='Home' className='mr-4'/>
                <CustomLink href='/about' title='About' className='mx-4'/>
                <CustomLink href='/projects' title='Projects' className='ml-4'/>
            </nav>


            <nav className='flex items-center gap-4 p-2'>
                <Link href={'https://github.com/yungnegev'} target='_blank'>
                    <AiFillGithub size={28} className='hover:text-zinc-700 active:scale-90 dark:fill-zinc-50'/>
                </Link>

                <button 
                    onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                    >
                    {
                        mode === 'dark' 
                            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                            ? <Image width={24} height={24} src={Moon} alt='moon' className='dark:bg-white rounded-full p-1' />
                            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                            : <Image width={24} height={24} src={Sun} alt='sun' className='dark:bg-white rounded-full p-1' />
                    }
                </button>
            </nav>
        </div>


        {/* {MOBILE VERSION} */}
        {
            isOpen ?

            <m.div className='flex flex-col min-w-[70vw] items-center justify-between fixed top-1/2 left-1/2 
                        -translate-x-1/2 -translate-y-1/2 z-30 bg-zinc-800/90 dark:bg-[#F8F0E3]/90
                        rounded-lg backdrop-blur-md py-32 gap-8'
                    initial={{opacity: 0.1, scale: 0.1, x: "-50%", y: "-50%"}}    
                    animate={{opacity:1, scale: 1}}
                    >
            <nav className='flex items-center flex-col justify-center gap-8'>
                <CustomMobileLink href='/' title='Home' className='' toggle={handleClick}/>
                <CustomMobileLink href='/about' title='About' className='' toggle={handleClick}/>
                <CustomMobileLink href='/projects' title='Projects' className='' toggle={handleClick}/>
            </nav>


            <nav className='flex items-center gap-6 p-2'>
                <Link href={'https://github.com/yungnegev'} target='_blank'>
                    <AiFillGithub size={28} className='hover:text-zinc-700 active:scale-90 dark:fill-zinc-950 fill-zinc-50'/>
                </Link>

                <button 
                    onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                    >
                    {
                        mode === 'dark' 
                            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                            ? <Image width={28} height={28} src={Moon} alt='moon' className='bg-white dark:bg-transparent rounded-full p-1' />
                            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                            : <Image width={28} height={28} src={Sun} alt='sun' className='bg-white dark:bg-transparent rounded-full p-1' />
                    }
                </button>
            </nav>
        </m.div>

            : null

        }

    </header>
  )
}

export default Navbar