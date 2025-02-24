import Spline from "@splinetool/react-spline";
import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const HaatSancharLandingPage = () => {
  const navigate = useNavigate();

  const splineContainer = useRef(null);

  // Control scaling on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (splineContainer.current) {
        const scrollY = window.scrollY;
        const scale = Math.max(0.8, 1 - scrollY * 0.001); // Limit minimum scale to 0.8
        splineContainer.current.style.transform = `scale(${scale})`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white font-sans">
      {/* Navigation Bar */}
      <nav className="p-4 px-6 bg-zinc-800/20 backdrop-blur-md fixed w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link to='/home' className="flex items-center">
            <img
             
              src="/logos.png" // Replace with your logo
              alt="HaatSanchar Logo"
              className="h-16 w-24 cursor-pointer mr-2"
            />
            {/* <h1 className="text-2xl font-bold text-white">HaatSanchar</h1> */}
          </Link>
          <div className="flex items-center space-x-6">
            <Link
            to='/news'
              className="text-lg hover:text-blue-500 transition-colors"
            >
              News
            </Link>
            <a
              href="#features"
              className="text-lg hover:text-blue-500 transition-colors"
            >
              Features
            </a>
            <a
              href="#about"
              className="text-lg hover:text-blue-500 transition-colors"
            >
              About
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center mb-3 px-4">
        <h1 className="text-6xl font-bold mb-4 animate-fade-in">
          Stay Informed with <span className="text-blue-500">HaatSanchar</span>
        </h1>
        <p className="text-xl mb-8 animate-fade-in delay-100">
          Real-time news from 10,000+ global sources in multiple languages.
        </p>
        <Link
          to="/news"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 animate-fade-in delay-200"
        >
          Get Started
        </Link>
      </section>
      <div className="  border-2 h-[100vh]  inset-0">
        <div className="h-[60%]  w-[100%]  scale-[1.80] overflow-hidden">
          <Spline scene="https://prod.spline.design/pfT474hGRIKmouyw/scene.splinecode" />
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-20 mt-4 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4">🌍 Global Coverage</h3>
              <p className="text-gray-300">
                Access news from 10,000+ sources worldwide, ensuring you never
                miss a story.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4">
                🗣️ Multi-Language Support
              </h3>
              <p className="text-gray-300">
                Read news in your preferred language with support for multiple
                languages.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4">📱 Responsive Design</h3>
              <p className="text-gray-300">
                Enjoy a seamless experience on any device, from desktops to
                smartphones.
              </p>
            </div>
            {/* Feature 4 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4">⚡ Real-Time Updates</h3>
              <p className="text-gray-300">
                Get the latest news as it happens with real-time updates.
              </p>
            </div>
            {/* Feature 5 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4">🔒 Privacy First</h3>
              <p className="text-gray-300">
                Your data is safe with us. We prioritize your privacy and
                security.
              </p>
            </div>
            {/* Feature 6 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4">📊 Personalized Feed</h3>
              <p className="text-gray-300">
                Customize your news feed based on your interests and
                preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            About HaatSanchar
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-300 mb-6">
              HaatSanchar is a modern React.js application designed to deliver
              real-time news updates from 10,000+ sources worldwide in multiple
              languages. Built with React, styled using Tailwind CSS, and
              powered by the News API, this app ensures a seamless, responsive,
              and user-friendly experience for staying updated on global events.
            </p>
            <p className="text-lg text-gray-300">
              Our mission is to provide accurate, timely, and diverse news to
              our users, empowering them to make informed decisions in an
              ever-changing world.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-800/60 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-300">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-20">
          <div className="bg-zinc-300/50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-gray-300 mb-4">
              "HaatSanchar keeps me updated with news from around the world. The
              multi-language support is a game-changer!"
            </p>
            <p className="font-semibold text-gray-200">- Priya Sharma</p>
          </div>
          <div className="bg-zinc-300/50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-gray-300 mb-4">
              "I love the customizable alerts. I never miss important updates on
              topics I care about."
            </p>
            <p className="font-semibold text-gray-200">- John Lee</p>
          </div>
          <div className="bg-zinc-300/50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-gray-300 mb-4">
              "The offline reading feature is perfect for my daily commute.
              Highly recommend this app!"
            </p>
            <p className="font-semibold text-gray-200">- Maria Gonzalez</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Stay Informed?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Join thousands of users who trust HaatSanchar for their daily news
            updates.
          </p>
          <Link
            to="/news"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            GetStarted
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-10 bg-black/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300 mb-4">
            © 2023 HaatSanchar. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-600 transition-colors"
            >
              <i className="fab fa-facebook text-xl"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-500 transition-colors"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
          </div>
        </div>
      </footer>

      {/* <div className="  border-2 inset-0">
        <div className="h-[100%] border-2 w-[100%] scale-[1.20] overflow-hidden">
          <Spline scene="https://prod.spline.design/pfT474hGRIKmouyw/scene.splinecode" />
        </div>
      </div> */}
    </div>
  );
};

export default HaatSancharLandingPage;
