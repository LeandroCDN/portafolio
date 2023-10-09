import { Audiowide  } from 'next/font/google'
import Image from 'next/image'
import "./Sections.css";
const audiowide = Audiowide({
  weight: '400',
  subsets: ['latin']
  
})

const Contributions = () => {
    
  
  return (
      <section className='flex flex-col items-center md:justify-between gap-0 xl:gap-16 w-full mb-20' >
        <h2 className='text-4xl flex justify-center mb-10 font-semibold'>My Contribution</h2>
        <div className="xl:w-2/3 w-4/5 header-style flex justify-between items-center rounded-sm mx-1 my-2" >
          <div className='xl:mx-5 mx-2'>
            <p>My chanel</p>
            <Image  src="/youtube.svg" alt="me" width="64" height="64" />
          </div>
          <div className='xl:mx-5 mx-2 flex justify-center flex-col'>
            <p className='flex justify-center'>Blog</p>
            <Image  className='flex justify-center' src="/Notion.svg" alt="me" width="64" height="64" />
          </div>

          <div className='xl:mx-5 mx-2'>
            <p>Github</p>
            <Image  src="/Github.svg" alt="me" width="64" height="64" />
          </div>
          
        </div>
        <div className='flex flex-row md:justify-between gap-0 xl:gap-16  mb-20 '> 
          
          
          <a href="#" class="flex flex-row block aling-center bg-white border border-white-200 rounded-lg shadow  dark:bg-white-800 dark:border-gray-700 ">
            <Image  src="/Github.svg" alt="me" width="64" height="64" />
            <h5 class="mb-2 text-2xl font-bold tracking-tight">Github</h5>
          </a>
          <a href="#" class="flex flex-row block aling-center bg-white border border-white-200 rounded-lg shadow  dark:bg-white-800 dark:border-gray-700 ">
            <Image  src="/Notion.svg" alt="me" width="64" height="64" />
            <h5 class="mb-2 text-2xl font-bold tracking-tight">Notion</h5>
          </a>
          <a href="#" class="flex flex-row block aling-center bg-white border border-white-200 rounded-lg shadow  dark:bg-white-800 dark:border-gray-700 ">
            <Image  src="/youtube.svg" alt="me" width="64" height="64" />
            <h5 class="mb-2 text-2xl font-bold tracking-tight">youtube</h5>
          </a>

        </div>



      </section>
  );
};
export default Contributions;