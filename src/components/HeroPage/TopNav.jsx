import React from 'react'
import { useNavigate } from 'react-router-dom';

const TopNav = () => {
  const navigate = useNavigate()
  return (
    <div className=" font-sans">
      {/* Navigation Bar */}
      <nav className="p-2 px-6 bg-zinc-800/50 backdrop-blur-md fixed w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img
              onClick={() => navigate(-1)}
              src="/logos.png" // Replace with your logo
              alt="HaatSanchar Logo"
              className="h-16 w-32  cursor-pointer mr-2"
            />
            {/* <h1 className="text-2xl font-bold text-white">HaatSanchar</h1> */}
          </div>
          <div className="flex items-center text-zinc-200 text-xl font-semibold space-x-6">
            <a
              href="/features"
              className="hover:text-zinc-50 transition-colors"
            >
              Features
            </a>
            <a href="/about" className="hover:text-zinc-50 transition-colors">
              About
            </a>
            <a href="/contact" className="hover:text-zinc-50 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default TopNav