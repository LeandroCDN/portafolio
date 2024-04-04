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
              <p> 1/1/2000 </p>
            </div>
            <p class="text-gray-700 text-base font-normal mb-2">
              Status: On Going
            </p>
            <p class="text-gray-700 text-base font-normal mb-2">
              Rol: CTO / Smart Contract developer
            </p>

            <p class="text-gray-700 text-base mb-4">
              My freelance journey has seen me tackle a wide range of projects,
              spanning lending, gambling, NFTs, tokens, and providing expert
              guidance in blockchain development, including crafting tokenomics
              and creating successful launch strategies.
            </p>

            <div
              class={` mb-2 text-xl font-bold tracking-tight ${audiowide.className}`}
            >
              About Nightz
            </div>
            <p class="text-gray-700 text-base mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              interdum urna at purus tincidunt eleifend. Fusce rhoncus enim
              vitae dolor egestas euismod. Maecenas aliquam scelerisque nunc,
              vitae euismod metus auctor sit amet. Duis vel lacus volutpat,
              vestibulum felis in, lacinia velit. Quisque suscipit lectus vitae
              nulla lobortis cursus. Aenean molestie non velit sed iaculis.
              Donec mollis lectus et massa pellentesque cursus.            </p>
          </div>
          <div className="xl:h-full xl:w-px  bg-white w-full h-px "></div>
          <a
            href="https://nightz.co/"
            target="_blank"
            class="flex justify-center "
          >
            <Image
              src="/og.webp"
              alt="Nightz protocol"
              width="400"
              height="400"
              className="sidecard p-2"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
export default SideProjects;