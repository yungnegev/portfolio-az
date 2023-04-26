import React from 'react'
import { type NextPage } from "next";
import Head from 'next/head';
import Image from 'next/image';
import profSrc from '../../public/images/profile.jpg'
import Ribbon from '~/components/Ribbon';


const About: NextPage = () => {
  return (
    <>
    <Head>
      <title>Arthur Zimuldinov | About</title>
      <meta name='description' content='about page'/>
    </Head>
    <main className='w-full select-none'>
      <section className='w-full h-full p-32 pt-0 z-0 flex flex-col items-center justify-center gap-16 mb-60 xl:p-24 lg:p-16 md:p-12 sm:p-8'>
        <h1 className='font-nobel text-6xl w-full text-center my-8 xl:text-6xl lg:text-5xl md:text-4xl xs:text-3xl'><span className='font-montserrat'>·</span> About Me <span className='font-montserrat'>·</span></h1>
        <div className='flex flex-col gap-20 justify-center items-center'>
          <div className='w-[340px] flex flex-col gap-4 items-center justify-between rounded-3xl border-2 
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
          </div>
          <div className='w-[700px] md:w-[360px]'>
            <p className='text-lg text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eum quo vitae laudantium. Voluptas sit autem dolor odio eveniet voluptatem fugit, est, at quod dolorem ad, tempore error accusamus natus. Illum sapiente blanditiis laboriosam. Culpa obcaecati numquam labore commodi dolor voluptatem placeat neque, impedit magnam ex officiis cupiditate perspiciatis a omnis? Suscipit explicabo.</p>
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