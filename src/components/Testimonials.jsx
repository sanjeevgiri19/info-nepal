import React from 'react'

const Testimonials = () => {
  return (
    <div>
      {/* Testimonials Section */}
      <section className="bg-gray-200 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-20">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-gray-600 mb-4">
              "HaatSanchar keeps me updated with news from around the world. The
              multi-language support is a game-changer!"
            </p>
            <p className="font-semibold text-gray-800">- Priya Sharma</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-gray-600 mb-4">
              "I love the customizable alerts. I never miss important updates on
              topics I care about."
            </p>
            <p className="font-semibold text-gray-800">- John Lee</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-gray-600 mb-4">
              "The offline reading feature is perfect for my daily commute.
              Highly recommend this app!"
            </p>
            <p className="font-semibold text-gray-800">- Maria Gonzalez</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials