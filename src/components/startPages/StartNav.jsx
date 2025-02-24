import React from "react";
import { Link } from "react-router-dom";
// import StartPage from './StartPage'

const StartNav = () => {
  return (
    <>
      <div className="">
        {/* typewriter effect index.css ma define garexa */}

        {/* Navigation Links */}
        <div className="flex items-center z-10 w-full h-16 text-black bg-zinc-600/80 fixed  text-3xl px-6 font-bold hover:text-red-800 cursor-pointer space-x-6">
          <Link
            to="/home"
            className="text-xl text-white hover:text-zinc-300 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/news"
            className="text-xl text-white hover:text-blue-500 transition-colors duration-300"
          >
            News
          </Link>
          <Link
            to="/features"
            className="text-xl text-white hover:text-blue-500 transition-colors duration-300"
          >
            Feature
          </Link>
        </div>

        <h2 className="typewriter z-10 fixed top-4 text-3xl font-bold text-zinc-200 left-[37%] hover:text-zinc-800 cursor-pointer ">
          Welcome to ixsn news...
        </h2>

        <Link
          to="/home"
          className=" z-10 fixed top-16 text-3xl font-bold left-[36%] underline hover:text-blue-600 hover:underline-offset-4"
        >
          Click Here to Explore News
        </Link>

        <h2 className=" z-10 w-[75%] fixed top-[86%] text-3xl font-bold text-center left-[12%] uppercase ">
          Stay Updated with Real-Time News from Over 10,000 Sources Worldwide in
          Multiple Languages
        </h2>

        {/* <a className=' z-10 fixed top-12 text-3xl font-bold left-[45%] underline hover:text-blue-600 hover:underline-offset-4' onClick={toggleClick} href="#">Click Here</a> */}

        {/* <StartPage /> */}
      </div>
    </>
  );
};

export default StartNav;
