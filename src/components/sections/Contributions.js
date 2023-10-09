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
        
        <div className='flex flex-row justify-between mb-20 w-full '> 
          
          
          <a href="#" class="flex flex-row block pr-2 aling-center bg-white border border-white-200 rounded-lg shadow dark:bg-white-800 dark:border-gray-700">
            <Image  src="/Github.svg" alt="me" width="48" height="48" />
            <h5 class="mb-2 text-xl font-semibold tracking-tight">Github</h5>
          </a>
          <a href="#" class="flex flex-row block pr-2 aling-center bg-white border border-white-200 rounded-lg shadow dark:bg-white-800 dark:border-gray-700">
            <Image  src="/Notion.svg" alt="me" width="48" height="48" />
            <h5 class="mb-2 text-xl font-semibold tracking-tight">Notion</h5>
          </a>
          <a href="#" class="flex flex-row block pr-2 aling-center bg-white border border-white-200 rounded-lg shadow dark:bg-white-800 dark:border-gray-700">
            <Image  src="/youtube.svg" alt="me" width="48" height="48" />
            <h5 class="mb-2 text-xl font-semibold tracking-tight">Youtube</h5>
          </a>

        </div>



      </section>
  );
};
export default Contributions;