import { Audiowide } from "next/font/google";
import Image from "next/image";
import "./Sections.css";
const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
});

const Experience = () => {
  return (
    <section className="">
      <div className={audiowide.className}>
        <h2 className="text-4xl flex justify-center mb-10">Experience</h2>
      </div>
      <div className="flex flex-col xl:flex-row items-center justify-between w-full mb-20 ">
        <div className=" xl:max-w-[30%] max-w-[90%] shadow-lg rounded-xl border border-radius mb-5 xl:mb-0">
          <Image
            src="/bg01.jpg"
            alt="image3"
            width={400}
            height={400}
            className="w-full h-48 imgcard object-cover mb-2"
          />
          <div class="px-5 py-3">
            <div className="flex flex-row justify-between w-full">
              <div class={` text-xl mb-2 ${audiowide.className}`}>
                Free lancer
              </div>
              <p> 1 year </p>
            </div>
            <p class="text-gray-700 text-sm text-base mb-2">
              As a freelancer, I managed small development teams and served
              clients independently.
            </p>
            <p class="text-gray-700 text-sm text-base">
              My freelance journey has seen me tackle a wide range of projects,
              spanning lending, gambling, NFTs, tokens, and providing expert
              guidance in blockchain development.
            </p>
          </div>
          <div class="px-6 mt-4">
            <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-bold text-gray-700 mr-2 mb-2 border border-white-200 bg-white bg-opacity-50">
              Solidity
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-bold text-gray-700 mr-2 mb-2 border border-white-200 bg-white bg-opacity-50">
              JavaScript
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-bold text-gray-700 mr-2 mb-2 border border-white-200 bg-white bg-opacity-50">
              Foundry
            </span>
          </div>
        </div>
        <div className="xl:max-w-[30%] max-w-[90%] shadow-lg rounded-xl border border-radius mb-5 xl:mb-0">
          <Image
            src="/Comadran.webp"
            alt="image3"
            width={400}
            height={400}
            className="w-full h-48 imgcard object-cover mb-2"
          />

          <div class="px-5 py-3">
            <div className="flex flex-row justify-between w-full">
              <div class={` text-xl mb-2 ${audiowide.className}`}>
                Comadran Studios
              </div>
              <p> 1 year </p>
            </div>
            <p class="text-gray-700 text-sm text-base mb-2">
              I developed all smart contracts for an NFT game, including the
              marketplace token and staking and locking systems.
            </p>
            <p class="text-gray-700 text-sm text-base">
              I was initially hired to audit Solidity code and successfully
              identified and resolved critical vulnerabilities in the production
              code.
            </p>
          </div>
          <div class="px-6 xl:mt-9">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-bold text-gray-700 mr-2 mb-2 border border-white-200 bg-white bg-opacity-50">
              Solidity
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-bold text-gray-700 mr-2 mb-2 border border-white-200 bg-white bg-opacity-50">
              Foundry
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-bold text-gray-700 mr-2 mb-2 border border-white-200 bg-white bg-opacity-50">
              Ether.js
            </span>
          </div>
        </div>
        <div className="xl:max-w-[30%] max-w-[90%] shadow-lg rounded-xl border border-radius mb-5 xl:mb-0">
          <a href="https://aurinext.com/" target="_blank">
            <Image
              src="/Aurinext.jpg"
              alt="image2"
              width={400}
              height={400}
              className="w-full h-48 object-cover imgcard overflow-hidden mb-2"
            />
          </a>
          <div class="px-5 py-3">
            <div className="flex flex-row justify-between w-full">
              <div class={` text-xl mb-2 ${audiowide.className}`}>
                <a href="https://aurinext.com/" target="_blank">
                  {" "}
                  Aurinext
                </a>
              </div>
              <p> 6 months </p>
            </div>
            <p class="text-gray-700 text-sm text-base mb-2">
              At Aurinext, I played a pivotal role in the development of
              Educaverse. My responsibilities included creating a custom token
              and implementing a pre-sale contract.
            </p>
            <p class="text-gray-700 text-sm text-base">
              Additionally, I was tasked with designing and developing the
              front-end interface for the pre-sale using JavaScript and Web3.js.
            </p>
          </div>
          <div class="px-6 xl:mt-4 ">
            <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-bold text-gray-700 mr-2 mb-2 border border-white-200 bg-white bg-opacity-50">
              Solidity
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-bold text-gray-700 mr-2 mb-2 border border-white-200 bg-white bg-opacity-50">
              JavaScript
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-bold text-gray-700 mr-2 mb-2 border border-white-200 bg-white bg-opacity-50">
              Web3.js
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
