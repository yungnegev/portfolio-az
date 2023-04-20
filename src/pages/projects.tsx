import React from 'react'
import { type NextPage } from "next";
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import { AiFillGithub } from 'react-icons/ai'
import pr1Src from '../../public/images/project1.png'


interface CardProps {
  type: string,
  title: string,
  summary: string,
  img: StaticImageData,
  link: string,
  github: string,
}

const CardDouble = ( props: CardProps) => {

  return (
    <article className='w-full flex items-center justify-between rounded-3xl border 
                        border-solid border-zinc-700 shadow-2xl'>

      <Link 
        href={props.link} 
        target='_blank'
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg'
        >
        <Image src={props.img} alt={props.title} className='w-full h-auto'/>
      </Link>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
        <span className='text-[#be274c] text-xl'>{props.type}</span>
        <Link href={props.link} target='_blank'>
          <h2>{props.title}</h2>
        </Link>
        <p>{props.summary}</p>
        <div>
          <Link href={props.github} target='_blank'>
            <AiFillGithub />
          </Link>
          <Link href={props.link} target='_blank'>
            Preview
          </Link>
        </div>
      </div>

    </article>
  )
}


const Projects: NextPage = () => {
  return (
    <>
    <Head>
      <title>Arthur Zimuldinov | Projects</title> 
      <meta name='description' content='projects' />
    </Head>
    <main className='w-full mb-16 flex flex-col items-center justify-center'>
      <section className='w-full h-full inline-block p-32 pt-16 z-0'>
        <h1 className='font-nobel text-7xl w-full text-center'>Projects & Templates</h1>
        <div className='grid grid-cols-12 gap-24 pt-28'>
          <div className='col-span-12'>
              <CardDouble 
                img={pr1Src}
                link='yung-blog.vercel.app'
                title='Personal Blog (MERN)'
                summary='A blog front end as part of my MERN project. Technologies employed: vite, react, redux-toolkit, sass. Applied Redux for state management, primarily async requests using thunks (extra reducers for handling pending, fullfilled and rejected requests).'
                type='Frontend as part of MERN app.'
                github='https://github.com/yungnegev/yung-blog'
                />
          </div>
          <div className='col-span-6'>
              project
          </div>
          <div className='col-span-6'>
              project
          </div>
        </div>
      </section>
    </main>

    </>
  )
}

export default Projects