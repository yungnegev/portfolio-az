import React, { useEffect, useRef } from 'react'
import { type NextPage } from "next";
import Head from 'next/head';
import { motion as m, useAnimation, useInView } from "framer-motion"
import Card from '~/components/Card';
import CardDouble from '~/components/DoubleCard';
import pr1src from '../../public/images/project1.png'
import pr3src from '../../public/images/project3.png'
import pr5src from '../../public/images/project5.png'


const Projects: NextPage = () => {

  const controls = useAnimation();
  const ref = useRef(null)
  const inView = useInView(ref);
  useEffect(() => {
    if (inView) {
      void controls.start("visible");
    }
  }, [controls, inView]);

  const leftVariants = {
    visible: { x: 0 },
    hidden: { x: -100 }
  }

  const rightVariants = {
    visible: { x: 0 },
    hidden: { x: 100 }
  }

  
  return (
    <>
    <Head>
      <title>Arthur Zimuldinov | Projects</title> 
      <meta name='description' content='projects' />
    </Head>
    <main className='w-full mb-16 flex flex-col items-center justify-center select-none'>
      <section className='w-full h-full inline-block p-32 pt-16 z-0'>
        <h1 className='font-nobel text-7xl w-full text-center'><span className='font-montserrat'>·</span> Projects & Templates <span className='font-montserrat'>·</span></h1>
        <div className='grid grid-cols-12 gap-24 pt-28 gap-y-32'>
          <div className='col-span-12'>
              <m.div
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.6 }}
                className='flex justify-center'
                >
                <CardDouble
                  img={pr3src}
                  link='https://fitness-typescript.vercel.app/'
                  title='Evogym'
                  summary='A front end, responsive, presentational website for a gym or fitnes focused business. Contact forms are created and validated using react hook form.'
                  type='Presentational contact-us style website.'
                  github='https://github.com/yungnegev/fitness-typescript'
                  />
              </m.div>
          </div>
          <div className='col-span-6 flex justify-end'>
              <m.div
                ref={ref}
                initial='hidden'
                animate={controls}
                variants={leftVariants}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.5 }}
                >
                <Card
                  img={pr1src}
                  link='https://yung-blog.vercel.app'
                  title='Personal Blog (MERN)'
                  summary='A blog front end as part of my MERN project. Technologies employed: vite, react, redux-toolkit, sass. Applied Redux for state management, primarily async requests using thunks (extra reducers for handling pending, fullfilled and rejected requests).'
                  type='Frontend part of a MERN app.'
                  github='https://github.com/yungnegev/yung-blog'
                  />
              </m.div>
          </div>
          <div className='col-span-6 flex justify-start'>
              <m.div
                ref={ref}
                initial='hidden'
                animate={controls}
                variants={rightVariants}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.5 }}
                >
                <Card
                  img={pr5src}
                  link='https://github.com/yungnegev/blogio-backend'
                  title='Express & MongoDB.'
                  summary='This is a fully functioning backend for a blog, it is part of my MERN project blog, buit with express js and mongoDB. The api endpoints allow for geting, posting deleting and updating posts, user endpoints allow for creating new users and authenticating on the website.'
                  type='Backend part of a MERN app.'
                  github='https://github.com/yungnegev/blogio-backend'
                  />
              </m.div>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}

export default Projects