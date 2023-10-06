import './Header.css';

const Header = () => {
  
  return (
      <header className="header-style flex justify-between items-center rounded-sm mx-1 my-2" >
        <h2 className=" font-semibold ml-4 text-2xl">Lean Labiano</h2>
        {/* <div className="w-full flex justify-end  mr-4 space-x-4 xl:flex-row flex-col">
          <a className="text-xl">About </a>
          <a className="text-xl">Experience</a>
          <a className="text-xl">Contributions</a>
          <a className="text-xl">My Skills</a>
          <a className="text-xl">Contact</a>
        </div> */}
      </header>
  );
};
export default Header;