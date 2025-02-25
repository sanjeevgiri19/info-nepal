
const Testimonials = () => {
  return (
    <div>
      <section id='about' className="bg-gray-400/60 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-600">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-20">
          <div className="bg-zinc-600/50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-gray-300 mb-4">
              InfoNepal keeps me updated with news from around the world. The
              multi-language support is a game-changer!
            </p>
            <p className="font-semibold text-gray-200">- Ridhan Puri</p>
          </div>
          <div className="bg-zinc-600/50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-gray-300 mb-4">
              I love the customizable alerts. I never miss important updates on
              topics I care about.
            </p>
            <p className="font-semibold text-gray-200">- Sarika Lee</p>
          </div>
          <div className="bg-zinc-600/50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-gray-300 mb-4">
              This app keeps me updated with Real-Time News from Over 10,000
              Sources Worldwide in Multiple Languages
            </p>
            <p className="font-semibold text-gray-200">- Neha Neupane</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials