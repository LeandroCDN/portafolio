import "./Sections.css";
import { Audiowide  } from 'next/font/google'
const audiowide = Audiowide({
  weight: '400',
  subsets: ['latin']
  
})

const Stack = () => {
    
  
  return (
      <section className='flex flex-col items-center gap-0  w-full' >
        <div className={audiowide.className}>
          <h2 className='text-4xl flex justify-center mb-10'>My Stack</h2>
        </div>
        <div className='grid grid-cols-2  xl:grid-cols-3 xl:gap-4  gap-0 xl:gap-16 w-full mb-20 '> 
          <div className="xl:flex xl:justify-start">
            <a href="#" class="block max-w-sm p-4 bg-white border rounded-lg shadow bg-white-800 border-gray-700 hover:bg-gray-700 xl:mb-0 mb-5 mx-2 xl:mx-0">
              <h5 class="block mb-2 text-2xl font-bold tracking-tight">Solidity</h5>
              <p class="font-normal">Two years on profesional experience building smart-contracts</p>
            </a>
          </div>
          <div className="xl:flex xl:justify-center">
            <a href="#" class="block max-w-sm p-4 bg-white border rounded-lg shadow bg-white-800 border-gray-700 hover:bg-gray-700 xl:mb-0 mb-5 mx-2 xl:mx-0">
              <h5 class="mb-2 text-2xl font-bold tracking-tight">Foundry</h5>
              <p class="font-normal">Foundy is the best envirioment to make smart contracts</p>
            </a>
          </div>
          <div className="xl:flex xl:justify-end">
            <a href="#" class="block max-w-sm p-4 bg-white border rounded-lg shadow bg-white-800 border-gray-700 hover:bg-gray-700 xl:mb-0 mb-5 mx-2 xl:mx-0">
              <h5 class="mb-2 text-2xl font-bold tracking-tight">Hardhat</h5>
              <p class="font-normal">Here are thogy acquisitions of 2021 so fogical order.</p>
            </a>
          </div>
            <a href="#" class="block max-w-sm p-4 bg-white border rounded-lg shadow bg-white-800 border-gray-700 hover:bg-gray-700 xl:mb-0 mb-5 mx-2 xl:mx-0">
              <h5 class="mb-2 text-2xl font-bold tracking-tight  ">JavaScript</h5>
              <p class="font-normal">JS for dApps, ether.js web3.js wagmi</p>
            </a>
          <div className="xl:flex xl:justify-center">          
            <a href="#" class="block max-w-sm p-4 bg-white border rounded-lg shadow bg-white-800 border-gray-700 hover:bg-gray-700 xl:mb-0 mb-5 mx-2 xl:mx-0">
              <h5 class="mb-2 text-2xl font-bold tracking-tight  ">Defi</h5>
              <p class="font-normal">JS for dApps, ether.js web3.js wagmi ether.js web3.js wagmi ether.js web3.js wagmi</p>
            </a>
          </div>
          <div className="xl:flex xl:justify-end">
            <a href="#" class="block max-w-sm p-4 bg-white border rounded-lg shadow bg-white-800 border-gray-700 hover:bg-gray-700 xl:mb-0 mb-5 mx-2 xl:mx-0">
              <h5 class="mb-2 text-2xl font-bold tracking-tight  ">Blockchain</h5>
              <p class="font-normal">JS for dApps, ether.js web3.js wagmiJSether.js web3.js wagmi</p>
            </a>
          </div>
        </div>
      </section>
  );
};
export default Stack;