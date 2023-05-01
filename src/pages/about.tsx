import React from 'react'
import { type NextPage } from "next";
import Head from 'next/head';
// import Image from 'next/image';
// import profSrc from '../../public/images/profile.jpg'
import Ribbon from '~/components/Ribbon';
import TransitionEffect from '~/components/TransitionEffect';


const About: NextPage = () => {
  return (
    <>
    <Head>
      <title>Arthur Zimuldinov | About</title>
      <meta name='description' content='about page'/>
    </Head>
    <TransitionEffect />
    <main className='w-full select-none'>
      <section className='w-full h-full p-32 pt-0 z-0 flex flex-col items-center justify-center gap-16 mb-60 xl:p-24 lg:p-16 md:p-12 sm:p-8'>
        <h1 className='font-nobel text-6xl w-full text-center my-8 xl:text-6xl lg:text-5xl md:text-4xl xs:text-3xl'><span className='font-montserrat'>·</span> About Me <span className='font-montserrat'>·</span></h1>
        <div className='flex flex-col gap-20 justify-center items-center'>
          {/* <div className='w-[340px] flex flex-col gap-4 items-center justify-between rounded-3xl border-2 
                          border-solid border-zinc-950 shadow-2xl p-6 relative bg-[#F8F0E3] dark:bg-zinc-800'>
          <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-zinc-950'/>
          <Image 
            priority
            src={profSrc} 
            placeholder='blur' 
            alt={'portrait'} 
            className='w-[300px] h-[300px] border-solid border-2 border-zinc-950 overflow-none rounded-lg'
            height={300}
            width={300}
            />
          </div> */}
          <div className='w-[710px] md:w-[360px]'>
            <p className='text-lg text-center'>I am web developer based in Marbella, Spain. Task-driven and focused on achieving high-quality results, dedicated to translating business requirements into code. I have always been passionate about programming and computers in general, tinkering with linux distributions and making personal home servers in my spare time. I am eager to tackle web development and design challenges. Scroll down if you want to see the list of technologies I use. </p>
          </div>
        </div>
        <h1 className='font-nobel text-6xl w-full text-center my-20 xl:text-6xl lg:text-5xl md:text-4xl xs:text-3xl'><span className='font-montserrat'>·</span> Tools I Use <span className='font-montserrat'>·</span></h1>
        <Ribbon />
      </section>
    </main>    
    </>
  )
}

export default About