import React from 'react'

const Footer = () => {
  return (
    <footer className='border-t border-zinc-700 flex items-center justify-center p-8 text-zinc-500 text-xs'>
      <span> © {new Date().getFullYear()} - All Rights Reserved. </span>
    </footer>
  )
}

export default Footer