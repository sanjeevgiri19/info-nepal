import HorizontalScroll from '../framerMotion/HorizontalScroll'

import MainText from './MainText';
import Footer from '../framerMotion/Footer';
import Testimonials from '../things/Testimonials';
import TopNav from './TopNav';
// import { GlobeDemo } from '../Globe';

const Main = () => {
  return (
    <>
    <div className=''>
      <TopNav />

      <MainText />
      {/* <GlobeDemo /> */}
      <HorizontalScroll />
      <Testimonials />
      <Footer />
      {/* <MainImg /> */}
    </div>
    </>
  );
};

export default Main;


