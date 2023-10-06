import Image from 'next/image'
import "./Sections.css";

const Experience = () => {
  
  return (
    <section className=''>
        <h2 className='text-4xl flex justify-center mb-10 font-semibold'>Experience</h2>
        {/* <div className="flex flex-col justify-center mb-10 xl:flex-row xl:justify-between ">
            <div className="flex-col max-w-[30%] experience shadow-lg rounded-xl border border-radius">
                
                <img src="https://i.postimg.cc/SxLx0fHV/bg01.jpg" alt="image2" className="w-full h-48 object-cover imgcard mb-2"/>
                <div class="px-6 py-4">
                    <div class="font-bold flex justify-center text-xl mb-2">Comadran Studios</div>
                    <p class="text-gray-700 text-sm text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                    </div>
                    <div class="px-6 flex justify-center pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">solidity</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Testing</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Hardhat</span>
                </div>
            </div>
        </div>
        <div class=" flex-col max-w-[30%] experience shadow-lg rounded-xl border border-radius">
            
            <img src="https://i.postimg.cc/J4khxLqf/bg02.jpg" alt="image2" className="w-full h-48 object-cover imgcard overflow-hidden mb-2"/>
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
        </div> */}
        <div className='flex flex-col xl:flex-row items-center md:justify-between gap-0 xl:gap-16 w-full mb-20'>
            <div className="flex-col xl:max-w-[30%] max-w-[80%] shadow-lg rounded-xl border border-radius mb-5">
                
                <img src="https://i.postimg.cc/VNYLzb8w/bg03.jpg" alt="image3" className="w-full h-48 imgcard object-cover mb-2" />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Comadran</div>
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
            <div className="flex-col xl:max-w-[30%] max-w-[80%] shadow-lg rounded-xl border border-radius mb-5">
                
                <img src="https://i.postimg.cc/SxLx0fHV/bg01.jpg" alt="image3" className="w-full h-48 imgcard object-cover mb-2" />
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

            

            <div className="flex-col xl:max-w-[30%] max-w-[80%] shadow-lg rounded-xl border border-radius mb-5">
            
                <img src="https://i.postimg.cc/J4khxLqf/bg02.jpg" alt="image2" className="w-full h-48 object-cover imgcard overflow-hidden mb-2"/>
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
        </div>
    </section>
  );
};
export default Experience;

