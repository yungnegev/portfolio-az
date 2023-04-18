import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { AiFillGithub } from 'react-icons/ai'

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
  return (
    <header className='w-full px-32 py-8 font-bold flex items-center justify-between'>
        <nav>
            <CustomLink href='/' title='Home' className='mr-4'/>
            <CustomLink href='/about' title='About' className='mx-4'/>
            <CustomLink href='/projects' title='Projects' className='ml-4'/>
        </nav>

        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
            <Logo />
        </div>

        <nav>
            <Link href={'https://github.com/yungnegev'} target='_blank'>
                <AiFillGithub size={28} className='hover:text-zinc-700 active:scale-90'/>
            </Link>
        </nav>
    </header>
  )
}

export default Navbar