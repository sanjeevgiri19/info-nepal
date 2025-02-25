
const Header = () => {
  return (
    <div>
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-fade-in-down">
          HaatSanchar App
        </h1>
        <p className="text-lg md:text-2xl mb-10 max-w-2xl px-4 animate-fade-in-up">
          Stay Updated with Real-Time News from Over 10,000 Sources Worldwide in
          Multiple Languages
        </p>
        <div className="flex gap-4">
          <a
            href="#features"
            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-transform transform hover:scale-105"
          >
            Explore Features
          </a>
        </div>
      </header>
      ;
    </div>
  );
}

export default Header