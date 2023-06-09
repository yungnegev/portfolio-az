import type { ReactNode } from 'react'
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

type Props = {
    children?: ReactNode,
}

const Layout = ({ children } : Props) => {
  return (
    <>
    <Navbar />
        { children } 
    <Footer />
    </>
  )
}

export default Layout