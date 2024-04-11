import Image from "next/image";
import { Audiowide } from "next/font/google";
const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
});

const About = () => {
  return (
    <section className="flex flex-col xl:flex-row items-center gap-0 xl:justify-between md:justify-between w-full my-10">
      <div className="flex flex-col justify-center gap-6 xl:gap-10 w-full xl:w-3/5">
        <div className="flex justify-center flex-col text-6xl">
          <div className={audiowide.className}>
            <h1 className="flex justify-center xl:text-6xl text-4xl">
              Leandro Labiano
            </h1>
            <h1 className="flex justify-center xl:text-2xl text-2xl text-black-100 opacity-30">
              solidity developer
            </h1>
          </div>
        </div>
        <span className="mx-2 xl:mx-0">
          Hello, I&apos;m a blockchain developer and content creator from
          Argentina. I work as a freelancer, specializing in building smart
          contracts, conducting private audits, and seamlessly integrating
          blockchain solutions into existing products. Let&apos;s work
          collaborate!
        </span>
        <div className="flex flex-row gap-2 justify-evenly mb-5">
          <a
            href="https://github.com/LeandroCDN"
            target="_blank"
            class="flex flex-row block pr-1 xl:pr-2 items-center border border-white-200 rounded-lg shadow  bg-white bg-opacity-20"
          >
            <Image src="/Github.svg" alt="me" width="48" height="48" />
            <h5 class="text-lg xl:text-xl font-semibold tracking-tight">
              Github
            </h5>
          </a>
          <a
            href="https://leanlabiano.super.site/"
            target="_blank"
            class="flex flex-row block pr-1 xl:pr-2 items-center border border-white-200 rounded-lg shadow  bg-white bg-opacity-20"
          >
            <Image src="/Notion.svg" alt="me" width="48" height="48" />
            <h5 class="text-lg xl:text-xl font-semibold tracking-tight">
              Notion
            </h5>
          </a>
          <a
            href="https://www.youtube.com/@leanlabiano"
            target="_blank"
            class="flex flex-row block pr-1 xl:pr-2 items-center border border-white-200 rounded-lg shadow  bg-white bg-opacity-20"
          >
            <Image src="/youtube.svg" alt="me" width="48" height="48" />
            <h5 class="text-lg xl:text-xl font-semibold tracking-tight">
              Youtube
            </h5>
          </a>
        </div>
      </div>
      <div className=" flex flex-col items-center overflow-hidden">
        <Image
          className="rounded-full"
          src="/Profile.jpg"
          priority={true}
          alt="me"
          width="330"
          height="330"
        />
      </div>
    </section>
  );
};
export default About;
