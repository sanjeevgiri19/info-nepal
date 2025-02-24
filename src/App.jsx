// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Mains from './components/HeroPage/Mains'
import StartPage from './components/startPages/StartPage'
import NewsApp from './components/NewsApp/NewsApp'
import { useState } from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import StartNav from './components/startPages/StartNav'
import HaatSancharLandingPage from './components/HeroPage/FeaturePage'


const App = () => {
const [isClicked, setIsClicked] = useState(true)
const [exploredClicked, setExploreClicked] = useState(true);

  const toggleClick = () => {
    try{
      setIsClicked ((prev) => !prev)
    } catch ( error) {
      console.error(error);
      
    }
  };

  const exploreToggle = () => {
    try {
      setExploreClicked((prev) => !prev);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* <Routes>
        <Route 
          path='/'
          element={
            isClicked ? (
              <div className='flex justify-center items-center h-screen w-full'>
                <StartPage toggleClick={toggleClick} />
              </div>
            ) : exploredClicked ? (
              <div>
              <img
                className="h-24 ml-10 mb-5 cursor-pointer hover:opacity-75 transition duration-300 ease-in-out"
                src="./images/logos.png"
                alt="Logo"
              />
              <Mains exploreToggle={exploreToggle} />
              <Example />
              <Footer />
            </div>
            ) : (
              <NewsApp />
            )
          }
        />

        <Route path='/news' element={<NewsApp />} />
        <Route path='/mains' element={<Mains exploreToggle={exploreToggle} />} />
        <Route path='/example' element={<Example />} />
      </Routes> */}

      <Routes>
        <Route path='/' element={<StartPage />} />
        <Route path="/home" element={<Mains exploreToggle={exploreToggle} />} />
        <Route path='/news' element={< NewsApp />} />
        <Route path='/features' element={<HaatSancharLandingPage />} />
      </Routes>

      {/* {isClicked ? (
        <div className="flex justify-center items-center h-screen w-full">
          <StartPage toggleClick={toggleClick} />
        </div>
      ) : (
        <div className="">
          {exploredClicked ? (
            <div>
              <div className="">
                <img
                  className="h-24 ml-10 mb-5 cursor-pointer hover:opacity-75 transition duration-300 ease-in-out"
                  src="./images/logos.png"
                  alt="Logo"
                />
              </div>
              <Mains exploreToggle={exploreToggle} />
              <Example />
              <Footer />
            </div>
          ) : (
            <div>
              <NewsApp />
            </div>
          )} */}
        {/* </div>
      )} */}
    </>
  );
}

export default App
