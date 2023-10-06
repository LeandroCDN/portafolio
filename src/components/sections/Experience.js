import Image from 'next/image'
import "./Sections.css";

const Experience = () => {
  
  return (
    <section className=''>
        <h2 className='text-4xl flex justify-center mb-10'> Experience</h2>
        <div className="flex flex-row justify-between">
            <div class=" flex-col max-w-[30%] experience shadow-lg rounded-xl">
                <Image className="px-6 py-4" src="/imgs/profile.jpg" alt="me" width="400" height="400" />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Comadran Studios</div>
                    <p class="text-gray-700 text-sm text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">solidity</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Testing</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Hardhat</span>
                </div>
            </div>
            <div class=" flex-col max-w-[30%] experience shadow-lg rounded-xl">
                <Image className="px-6 py-4" src="/imgs/profile.jpg" alt="me" width="400" height="400" />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Aurinext</div>
                    <p class="text-gray-700 text-sm text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                    </div>
                    <div class="px-6 pt-4 text-xl pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Solidity</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JavaScript</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Hardhat</span>
                </div>
            </div>
            <div class=" flex-col max-w-[30%] experience shadow-lg rounded-xl">
                <Image className="px-6 py-4" src="/imgs/profile.jpg" alt="me" width="400" height="400" />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Free lancer</div>
                    <p class="text-gray-700 text-sm text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Solidity</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JavaScript</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Foundry</span>
                </div>
            </div>
        </div>
    </section>
  );
};
export default Experience;