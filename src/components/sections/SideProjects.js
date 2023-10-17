import { Audiowide  } from 'next/font/google'
import "./Sections.css";
const audiowide = Audiowide({
  weight: '400',
  subsets: ['latin']  
})

const SideProjects = () => {
  return (
    <section>
      <div className={audiowide.className}>
        <h2 className='text-4xl flex justify-center mb-10'>Side-Projects</h2>
      </div>
      <div className='flex flex-col xl:flex-row items-center justify-between w-full mb-20 xl:items-stretch'>
        <div className="flex flex-row  shadow-lg rounded-xl border border-radius mb-5 xl:mb-0">
          <div class="xl:max-w-[50%] px-5 py-3">
            <div className="flex flex-row justify-between w-full">
              <div class={` mb-2 text-2xl font-bold tracking-tight ${audiowide.className}`}>
                Nightz
              </div>
              <p> 1/1/2000 </p>
            </div>
            <p class="text-gray-700 text-base font-normal mb-2">
              Status: On Going
            </p>
            <p class="text-gray-700 text-base font-normal mb-2">
              Rol: Smart Contract developer / CTO
            </p>
            
            <p class="text-gray-700 text-base">
              My freelance journey has seen me tackle a wide range of projects, spanning lending, gambling, NFTs, tokens, and providing expert guidance in blockchain development, including crafting tokenomics and creating successful launch strategies.
            </p>
            
          </div>
          <img src="https://i.postimg.cc/SxLx0fHV/bg01.jpg" alt="image3" className=" max-w-[25%] xl:max-w-[50%] xl:w-full xl:h-96 object-cover sidecard m-3" />
        </div>
      </div>
    </section>
  );
};
export default SideProjects;