import { type NextPage } from "next";
import Head from 'next/head';
import Card from '~/components/Card';
import CardDouble from '~/components/DoubleCard';
import pr1src from '../../public/images/project1.png'
import pr3src from '../../public/images/project3.png'
import pr5src from '../../public/images/project5.png'
import TransitionEffect from '~/components/TransitionEffect';


const Projects: NextPage = () => {
  return (
    <>
    <Head>
      <title>Arthur Zimuldinov | Projects</title> 
      <meta name='description' content='projects' />
    </Head>
    <TransitionEffect />
    <main className='w-full mb-16 flex flex-col items-center justify-center select-none'>
      <section className='w-full h-full inline-block p-32 pt-16 z-0 xl:p-24 lg:p-16 md:p-12 sm:p-8'>
        
        <h1 className='font-nobel text-6xl w-full text-center xl:text-6xl lg:text-5xl md:text-4xl xs:text-3xl sm:mt-10 '><span className='font-montserrat'>·</span> Projects & Templates <span className='font-montserrat'>·</span></h1>
        
        <div className='grid grid-cols-12 gap-24 pt-28 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
          <div className='col-span-12 flex justify-center'>
                <CardDouble
                  img={pr3src}
                  link='https://fitness-typescript.vercel.app/'
                  title='Evogym'
                  summary='A front end, responsive, presentational website for a gym or fitnes focused business. Contact forms are created and validated using react hook form.'
                  type='Presentational contact-us style website.'
                  github='https://github.com/yungnegev/fitness-typescript'
                  />
          </div>
          <div className='col-span-6 sm:col-span-12 flex justify-end sm:justify-center'>
                <Card
                  img={pr1src}
                  link='https://yung-blog.vercel.app'
                  title='Personal Blog (MERN)'
                  summary='A blog front end as part of my MERN project. Technologies employed: vite, react, redux-toolkit, sass. Applied Redux for state management, primarily async requests using thunks (extra reducers for handling pending, fullfilled and rejected requests).'
                  type='Frontend part of a MERN app.'
                  github='https://github.com/yungnegev/yung-blog'
                  />
          </div>
          <div className='col-span-6 sm:col-span-12 flex justify-start sm:justify-center'>
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