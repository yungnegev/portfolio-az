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

            <span className={`bg-zinc-900 h-[1px] inline-block absolute left-0 -bottom-1
                            group-hover:w-full transition-[width] ease duration-300 
                            ${path === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </Link>
    )
}

const Navbar = () => {

  const [ mode, setMode ] = useThemeSwitcher()

  return (
    <header className='w-full px-32 py-8 font-bold flex items-center justify-between select-none'>
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
                <AiFillGithub size={28} className='hover:text-zinc-700 active:scale-90'/>
            </Link>

            <button 
                // eslint-disable-next-line @typescript-eslint/no-unsafe-return
                onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                >
                {
                    mode === 'dark' 
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                        ? <Image width={20} height={20} src={Moon} alt='sun' />
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                        : <Image width={20} height={20} src={Sun} alt='sun' />
                }
            </button>
        </nav>
    </header>
  )
}

export default Navbar