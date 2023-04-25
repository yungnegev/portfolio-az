import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { AiFillGithub } from 'react-icons/ai'
import useThemeSwitcher from '~/hooks/useThemeSwitcher'
import Sun from '../../public/icons/sun.svg'
import Moon from '../../public/icons/moon.svg'

type CustomLinkProps = {
    href: string,
    title: string,
    className: string
}

const CustomLink = ({ href, title, className }: CustomLinkProps) => {

    const path = useRouter().pathname

    console.log(path)

    return(
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`bg-zinc-950 dark:bg-white h-[1px] inline-block absolute left-0 -bottom-1
                            group-hover:w-full transition-[width] ease duration-300 
                            ${path === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </Link>
    )
}

const Navbar = () => {

  const [ mode, setMode ] = useThemeSwitcher()

  return (
    <header className='w-full px-32 py-8 font-bold flex items-center justify-between select-none dark:bg-zinc-800 dark:text-white'>
        <nav>
            <CustomLink href='/' title='Home' className='mr-4'/>
            <CustomLink href='/about' title='About' className='mx-4'/>
            <CustomLink href='/projects' title='Projects' className='ml-4'/>
        </nav>

        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
            <Logo />
        </div>

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
    </header>
  )
}

export default Navbar