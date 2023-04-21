import React from 'react'
import { type NextPage } from "next";
import Head from 'next/head';
import Card from '~/components/Card';
import CardDouble from '~/components/DoubleCard';
import pr1src from '../../public/images/project1.png'
import pr3src from '../../public/images/project3.png'
import pr5src from '../../public/images/project5.png'


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
        <div className='grid grid-cols-12 gap-24 pt-28 gap-y-32'>
          <div className='col-span-12'>
              <CardDouble 
                img={pr3src}
                link='https://fitness-typescript.vercel.app/'
                title='Evogym'
                summary='A front end, responsive, presentational website for a gym or fitnes focused business. Contact forms are created and validated using react hook form.'
                type='Presentational contact-us style website.'
                github='https://github.com/yungnegev/fitness-typescript'
                />
          </div>
          <div className='col-span-6'>
              <Card 
                img={pr1src}
                link='yung-blog.vercel.app'
                title='Personal Blog (MERN)'
                summary='A blog front end as part of my MERN project. Technologies employed: vite, react, redux-toolkit, sass. Applied Redux for state management, primarily async requests using thunks (extra reducers for handling pending, fullfilled and rejected requests).'
                type='Frontend part of a MERN app.'
                github='https://github.com/yungnegev/yung-blog'
                />
          </div>
          <div className='col-span-6'>
              <Card 
                img={pr5src}
                link='https://github.com/yungnegev/blogio-backend'
                title='Express & MongoDB.'
                summary='This is a fully functioning backend for a blog, it is part of my MERN project blog, buit with express js and mongoDB. The api endpoints allow for geting, posting deleting and updating posts, user endpoints allow for creating new users and authenticating on the website.'
                type='Backend part of a MERN app.'
                github='https://github.com/yungnegev/blogio-backend'
                />
          </div>
        </div>
      </section>
    </main>

    </>
  )
}

export default Projects