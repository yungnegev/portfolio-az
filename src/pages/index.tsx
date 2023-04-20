import { type NextPage } from "next";
import Image from "next/image";
import profSrc from '../../public/images/profile.jpg'
import { motion as m } from 'framer-motion'
import Link from "next/link";
import { RxExternalLink } from 'react-icons/rx'
import { SiMinutemailer } from 'react-icons/si'



const Home: NextPage = () => {

  const MLink = m(Link)

  return (
      <main className="flex items-center w-full min-h-screen select-none">
        <section className="w-full h-full inline-block p-32 pt-0 z-0">
          <div className="flex items-center justify-between w-full">
            {/* IMAGE */}
            <m.div 
              className="w-1/2 flex justify-center"
              initial={{ x: -70 }}
              animate={{ x: 1 }}
              transition={{ duration: 0.5 }}
              >
              <Image src={profSrc} alt='AZ' width={360} height={360} placeholder='blur' className="home__img"/> 
            </m.div>
            {/* MAIN */}
            <div className="w-1/2 flex flex-col gap-4 font-poppins overflow-hidden">
              <m.h1 
                className="font-nobel text-7xl"
                initial={{ y: -70, opacity: 0.65 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                >Arthur Zimuldinov</m.h1>
              
              <m.h2 
                className="text-2xl text-zinc-600 relative pl-24 home__subtitle font-montserrat"
                initial={{ x: -100 }}
                animate={{ x: 1 }}
                transition={{ duration: 1.4 }}
                >{'<Full-Stack Developer />'}</m.h2>
              
              <p className="text-l text-zinc-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum libero inventore quia illo! Voluptatem, qui.</p>
              
              <m.div 
                className="flex items-center self-start mt-4 gap-6"
                initial={{ y: 70, opacity: 0.65 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                >
                <MLink 
                  href={'/dummy.pdf'}
                  target={"_blank"}
                  className="flex items-center bg-zinc-900 text-white p-3 px-6 rounded-md gap-2"
                  whileHover={{
                    backgroundColor:["#09090b", "#5eead4","#fcd34d","#be274c", "#09090b"],
                  }}
                  >
                  CV
                  <RxExternalLink />
                 </MLink>
                 <Link 
                    href={'mailto:arthur.zimuldinov@gmail.com'} 
                    target={"_blank"}
                    className="underline underline-offset-4 flex items-center gap-2 hover:text-zinc-600"
                    >
                    Contact
                    <SiMinutemailer size={22}/>
                 </Link>
              </m.div>
            </div>
          </div>
        </section>
      </main>
  );
};

export default Home;
