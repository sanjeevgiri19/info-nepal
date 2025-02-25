// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Mains from "./components/HeroPage/Mains";
import StartPage from "./components/startPages/StartPage";
import NewsApp from "./components/NewsApp/NewsApp";
import { Route, Routes } from "react-router-dom";
import HaatSancharLandingPage from "./components/HeroPage/FeaturePage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/home" element={<Mains />} />
        <Route path="/news" element={<NewsApp />} />
        <Route path="/features" element={<HaatSancharLandingPage />} />
      </Routes>
    </>
  );
};

export default App;
