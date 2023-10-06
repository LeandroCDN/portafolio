import Image from 'next/image'
const About = () => {
  
  return (
      <section className='flex flex-col xl:flex-row items-center md:justify-between gap-0 xl:gap-16 w-full mb-20' >
        <div className="flex flex-col justify-center gap-6 xl:gap-10 w-full xl:w-3/5">
            <div>
                <h1 className="flex justify-center text-6xl">Leandro Labiano</h1>
                <h1 className="flex justify-center text-2xl text-gray-100" >solidity developer</h1>
            </div>
            <span> 
                Hello, I&apos;m a blockchain developer and content creator from Argentina.
                I work as a freelancer, specializing in building smart contracts, conducting private audits, 
                and assisting with the swift integration of blockchain technologies into your project. 
                Let&apos;s collaborate!
            </span>
        </div>
        <div className="w-full xl:w-2/5 flex flex-col items-center justify-center overflow-hidden">
          <Image className="rounded-full" src="/Profile.jpg" alt="me" width="360" height="360" />
        </div>
      </section>
  );
};
export default About;