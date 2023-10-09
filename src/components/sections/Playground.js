import Image from 'next/image'
import "./Sections.css";

const Playground = () => {
    
  
  return (
      <section className='flex flex-col items-center md:justify-between gap-0 xl:gap-16 w-full mb-20' >
        <h2 className='text-4xl flex justify-center mb-10 font-semibold'>Playground</h2>
        <div className='flex xl:flex-row justify-between w-full '> 
          <p> conect wallet</p>
          <p> Giladas de Playground</p>
        </div>
      </section>
  );
};
export default Playground;