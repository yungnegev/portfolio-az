import Link from 'next/link'
import React from 'react'
import Logo from './Logo'

const Navbar = () => {
  return (
    <header className='w-full px-32 py-8 font-bold flex items-center justify-between'>
        <nav>
            <Link href={'/'}>Home</Link>
            <Link href={'/about'}>About</Link>
            <Link href={'/projects'}>Projects</Link>
        </nav>
        <Logo />
        <nav>
            <Link href={'/'} target='_blank'>sfsf</Link>
        </nav>
    </header>
  )
}

export default Navbar