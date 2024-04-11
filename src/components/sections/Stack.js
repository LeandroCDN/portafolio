import "./Sections.css";
import { Audiowide } from "next/font/google";
const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
});

const Stack = () => {
  return (
    <section className="flex flex-col items-center gap-0  w-full">
      <div className={audiowide.className}>
        <h2 className="text-4xl flex justify-center mb-10">My Stack</h2>
      </div>
      <div className="grid grid-cols-2  xl:grid-cols-3 xl:gap-4  gap-0 xl:gap-16 w-full mb-20 ">
        <div className="flex justify-start">
          <a
            href="https://github.com/LeandroCDN/solidity-project-examples"
            target="_blank"
            class="block max-w-sm p-4 bg-white border rounded-lg shadow bg-white-800 border-gray-700 hover:bg-gray-700 xl:mb-0 mb-5 mx-2 xl:mx-0"
          >
            <h5 class="block mb-2 text-2xl font-bold tracking-tight">
              Solidity
            </h5>
            <p class="font-normal">
              Two years of professional experience in smart contract
              development, leadership roles and providing expertise in smart
              contract solutions.
            </p>
          </a>
        </div>
        <div className="flex justify-center">
          <div
            href="#"
            class="block max-w-sm p-4 bg-white border rounded-lg shadow bg-white-800 border-gray-700 hover:bg-gray-700 xl:mb-0 mb-5 mx-2 xl:mx-0"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight">Foundry</h5>
            <p class="font-normal">
              Foundry excels as a top-tier platform for smart contract
              development, testing, and deployment.
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <a
            href="https://github.com/LeandroCDN/towerChain"
            target="_blank"
            class="block max-w-sm p-4 bg-white border rounded-lg shadow bg-white-800 border-gray-700 hover:bg-gray-700 xl:mb-0 mb-5 mx-2 xl:mx-0"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight">Hardhat</h5>
            <p class="font-normal">
              Hardhat is a widely used development environment the creation,
              testing, and deployment of smart contracts.
            </p>
          </a>
        </div>
        <a
          href="https://crud-prisma-blockchain-git-main-leandrocdn.vercel.app/"
          target="_blank"
          class="block max-w-sm p-4 bg-white border rounded-lg shadow bg-white-800 border-gray-700 hover:bg-gray-700 xl:mb-0 mb-5 mx-2 xl:mx-0"
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight  ">
            JavaScript-TS-Node
          </h5>
          <p class="font-normal">
            JavaScript is my tool of choice for architecting dApps that
            communicate with smart contracts, thanks to ethers.js and web3.js.
          </p>
        </a>
        <div className="flex justify-center">
          <div
            href="#"
            class="block max-w-sm p-4 bg-white border rounded-lg shadow bg-white-800 border-gray-700 hover:bg-gray-700 xl:mb-0 mb-5 mx-2 xl:mx-0"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight  ">Defi</h5>
            <p class="font-normal">
              DeFi specialist with a strong grasp of leading projects,
              specializing in lending, swapping, staking, and blockchain
              economies.
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <a
            href="#"
            class="block max-w-sm p-4 bg-white border rounded-lg shadow bg-white-800 border-gray-700 hover:bg-gray-700 xl:mb-0 mb-5 mx-2 xl:mx-0"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight  ">Blockchain</h5>
            <p class="font-normal">
              Deep expertise in diverse blockchains, skilled in seamless
              integration of solutions, and a trusted technical consultant.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Stack;
