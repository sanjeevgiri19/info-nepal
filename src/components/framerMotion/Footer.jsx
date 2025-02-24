const Footer = () => {
  return (
    <footer className="bg-zinc-800/70 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">News Channel</h2>
            <p className="text-gray-200">
              Your trusted source for breaking news, analysis, exclusive
              interviews, and in-depth reports from across the globe.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                "Home",
                "World News",
                "Technology",
                "Sports",
                "Entertainment"
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-200 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://www.facebook.com/"
                  aria-label="Facebook"
                  className="text-gray-200 hover:text-purple-400 transition-colors duration-300"
                >
                  <i className="fab fa-facebook text-2xl"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com/"
                  aria-label="Twitter"
                  className="text-gray-200 hover:text-purple-400 transition-colors duration-300"
                >
                  <i className="fab fa-twitter text-2xl"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  aria-label="Instagram"
                  className="text-gray-200 hover:text-purple-400 transition-colors duration-300"
                >
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/"
                  aria-label="YouTube"
                  className="text-gray-200 hover:text-purple-400 transition-colors duration-300"
                >
                  <i className="fab fa-youtube text-2xl"></i>
                </a>
              </li>
            </ul>

            <div className="mt-4">
              <h4 className="text-lg font-semibold">Contact Us</h4>
              <p className="text-gray-200 mt-1">
                Email: girisanjib191s@gmail.com
              </p>
              <p className="text-gray-200 mt-1">Phone: 9898989898</p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-200">
          &copy; {new Date().getFullYear()} IXSN News. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
