import { type NextPage } from "next";
import Image from "next/image";
import profSrc from '../../public/images/profile.jpg'



const Home: NextPage = () => {
  return (
      <main className="flex items-center w-full min-h-screen">
        <section className="w-full h-full inline-block p-32 pt-0 z-0">
          <div className="flex items-center justify-between w-full">
            
            <div className="w-1/2">
              <Image src={profSrc} alt='AZ' width={360} height={360} className="home__img"/> 
             </div>

            <div className="w-1/2 flex flex-col gap-4 font-poppins overflow-hidden">
              <h1 className="font-bold text-7xl ">ARTHUR ZIMULDINOV</h1>
              <h2 className="text-3xl text-zinc-600 relative pl-24 home__subtitle">Full-Stack Developer</h2>
              <p className="text-l text-zinc-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum libero inventore quia illo! Voluptatem, qui.</p>
            </div>
          </div>
        </section>
      </main>
  );
};

export default Home;
