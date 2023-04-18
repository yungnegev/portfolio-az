import { type NextPage } from "next";
import Image from "next/image";
import profSrc from '../../public/images/profile.jpg'
import { motion as m } from 'framer-motion'



const Home: NextPage = () => {
  return (
      <main className="flex items-center w-full min-h-screen select-none">
        <section className="w-full h-full inline-block p-32 pt-0 z-0">
          <div className="flex items-center justify-between w-full">
            
            <m.div 
              className="w-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              >
              <Image src={profSrc} alt='AZ' width={360} height={360} placeholder='blur' className="home__img"/> 
            </m.div>

            <div className="w-1/2 flex flex-col gap-4 font-poppins overflow-hidden">
              <m.h1 
                className="font-bold text-7xl "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                >ARTHUR ZIMULDINOV</m.h1>
              <m.h2 
                className="text-2xl text-zinc-600 relative pl-24 home__subtitle font-montserrat"
                initial={{ x: -100 }}
                animate={{ x: 1 }}
                transition={{ duration: 1 }}
                >{'<Full-Stack Developer />'}</m.h2>
              <p className="text-l text-zinc-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum libero inventore quia illo! Voluptatem, qui.</p>
            </div>
          </div>
        </section>
      </main>
  );
};

export default Home;
