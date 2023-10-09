import "./Sections.css";
import { Audiowide  } from 'next/font/google'
const audiowide = Audiowide({
  weight: '400',
  subsets: ['latin']
  
})

const Stack = () => {
    
  
  return (
      <section className='flex flex-col items-center md:justify-between gap-0  w-full' >
        <div className={audiowide.className}>
          <h2 className='text-4xl flex justify-center mb-10'>My Stack</h2>
        </div>
        <div className='grid grid-cols-2  xl:grid-cols-4 xl:gap-4 md:justify-between gap-0 xl:gap-16 w-full mb-20 '> 
          
          
          <a href="#" class="block max-w-sm p-6 bg-white border border-white-200 rounded-lg shadow hover:bg-white-100 dark:bg-white-800 dark:border-gray-700 dark:hover:bg-gray-700 xl:mb-0 mb-5 mx-2 mx-2">
            <h5 class="mb-2 text-2xl font-bold tracking-tight">Soliidty</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">Two years on profesional experience building smart-contracts</p>
          </a>
          <a href="#" class="block max-w-sm p-6 bg-white border border-white-200 rounded-lg shadow hover:bg-white-100 dark:bg-white-800 dark:border-gray-700 dark:hover:bg-gray-700 xl:mb-0 mb-5 mx-2">
            <h5 class="mb-2 text-2xl font-bold tracking-tight">Foundry</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">Foundy is the best envirioment to make smart contracts</p>
          </a>
          <a href="#" class="block max-w-sm p-6 bg-white border border-white-200 rounded-lg shadow hover:bg-white-100 dark:bg-white-800 dark:border-gray-700 dark:hover:bg-gray-700 xl:mb-0 mb-5 mx-2">
            <h5 class="mb-2 text-2xl font-bold tracking-tight">Hardhat</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">Here are thogy acquisitions of 2021 so fogical order.</p>
          </a>
          <a href="#" class="block max-w-sm p-6 bg-white border border-white-200 rounded-lg shadow hover:bg-white-100 dark:bg-white-800 dark:border-gray-700 dark:hover:bg-gray-700 xl:mb-0 mb-5 mx-2">
            <h5 class="mb-2 text-2xl font-bold tracking-tight  ">JS</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">JS for dApps, ether.js web3.js wagmi</p>
          </a>
          <a href="#" class="block max-w-sm p-6 bg-white border border-white-200 rounded-lg shadow hover:bg-white-100 dark:bg-white-800 dark:border-gray-700 dark:hover:bg-gray-700 xl:mb-0 mb-5 mx-2">
            <h5 class="mb-2 text-2xl font-bold tracking-tight  ">JS</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">JS for dApps, ether.js web3.js wagmi</p>
          </a>
          <a href="#" class="block max-w-sm p-6 bg-white border border-white-200 rounded-lg shadow hover:bg-white-100 dark:bg-white-800 dark:border-gray-700 dark:hover:bg-gray-700 xl:mb-0 mb-5 mx-2">
            <h5 class="mb-2 text-2xl font-bold tracking-tight  ">JS</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">JS for dApps, ether.js web3.js wagmiJS for dApps, ether.js web3.js wagmiJS for dApps, ether.js web3.js wagmi</p>
          </a>
          <a href="#" class="block max-w-sm p-6 bg-white border border-white-200 rounded-lg shadow hover:bg-white-100 dark:bg-white-800 dark:border-gray-700 dark:hover:bg-gray-700 xl:mb-0 mb-5 mx-2">
            <h5 class="mb-2 text-2xl font-bold tracking-tight  ">JS</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">JS for dApps, ether.js web3.js wagmi</p>
          </a>
          <a href="#" class="block max-w-sm p-6 bg-white border border-white-200 rounded-lg shadow hover:bg-white-100 dark:bg-white-800 dark:border-gray-700 dark:hover:bg-gray-700 xl:mb-0 mb-5 mx-2">
            <h5 class="mb-2 text-2xl font-bold tracking-tight  ">JS</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">JS for dApps, ether.js web3.js wagmi</p>
          </a>

        </div>
      </section>
  );
};
export default Stack;