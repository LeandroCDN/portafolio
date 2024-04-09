import { Audiowide  } from 'next/font/google'
import "./Sections.css";
import Image from 'next/image';
const audiowide = Audiowide({
  weight: '400',
  subsets: ['latin']  
})

const SideProjects = () => {
  return (
    <section>
      <div className={audiowide.className}>
        <h2 className="text-4xl flex justify-center mb-10">Side-Projects</h2>
      </div>
      <div className="flex flex-col xl:flex-row items-center justify-between w-full mb-20 xl:items-stretch">
        <div className="flex xl:flex-row flex-col xl:justify-between justify-center shadow-lg rounded-xl border border-radius mb-5 xl:mb-0">
          <div class="xl:max-w-[50%] px-5 py-3">
            <div className="flex flex-row justify-between w-full">
              <div
                class={` mb-2 text-2xl font-bold tracking-tight ${audiowide.className}`}
              >
                Nightz
              </div>
              <p> From 20/8/2023 to 1/2/2024 </p>
            </div>
            <p class="text-gray-700 text-base font-normal mb-2">
              Status: On Going
            </p>
            <p class="text-gray-700 text-base font-normal mb-2">
              Rol: CTO / Smart Contract developer
            </p>

            <p class="text-gray-700 text-base mb-4">
              At Nightz, I led the team creation and directed the web
              development, while personally overseeing the implementation of
              smart contracts. I successfully coordinated the launch and managed
              the product migration across various networks to our main network.
            </p>

            <div
              class={` mb-2 text-xl font-bold tracking-tight ${audiowide.className}`}
            >
              About Nightz - {" "}
              <a href="https://nightz.co/"
              target="_blank">Link</a>
            </div>
            <p class="text-gray-700 text-base mb-4">
              Nightz is a protocol enabling the acquisition of memberships, each
              tied to a plan offering access to stays in different properties.
              Each Nightz NFT represents one night&apos;s stay.{" "}
            </p>
          </div>
          <div className="xl:flex xl:flex-row">
            <div className="xl:h-full xl:w-px  bg-white w-full h-px "></div>
            <a
              href="https://nightz.co/"
              target="_blank"
              class="flex justify-center xl:h-full  "
            >
              <img
                src="/nightzimg.jpeg"
                alt="Nightz protocol"
                className=" object-cover overflow-hidden object-left	sidecard"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SideProjects;