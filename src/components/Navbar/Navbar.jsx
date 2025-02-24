import  { useState } from "react";

import Logo from "./Logo";
import Category from "./Category";
import SearchLogin from "./SearchLogin";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar = ({ getData, handleInput, searchData, userInput }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="flex justify-center gap-10 items-center py-4 px-2">
      <Logo />
      <button
        className="md:hidden text-3xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <IoMdClose /> : <IoMdMenu />}
      </button>

      <div className="hidden md:flex">
        <Category userInput={userInput} />
      </div>

      <SearchLogin
        handleInput={handleInput}
        searchData={searchData}
        getData={getData}
      />

      {menuOpen && (
        <div className="absolute text-white bg-zinc-800/90 top-[60px]  w-56 sm:w-80 md:hidden ">
          <Category  userInput={userInput} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
