import { Link, useNavigate } from "react-router-dom";

const TopNav = () => {
  const navigate = useNavigate();
  return (
    <div className=" font-sans">
      <nav className=" px-6 bg-zinc-800/50 backdrop-blur-md fixed w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img
              onClick={() => navigate(-1)}
              src="/infoLogo.png" 
              alt="HaatSanchar Logo"
              className="h-24 w-28  cursor-pointer mr-2"
            />
            {/* <h1 className="text-2xl font-bold text-white">Info Nepal</h1> */}
          </div>
          <div className="flex items-center text-zinc-200 text-xl font-semibold space-x-6">
            <Link to="/news" className="hover:text-zinc-50 transition-colors">
              News
            </Link>
            <Link
              to="/features"
              className="hover:text-zinc-50 transition-colors"
            >
              Features
            </Link>
            <a href="#about" className="hover:text-zinc-50 transition-colors">
              About
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TopNav;
