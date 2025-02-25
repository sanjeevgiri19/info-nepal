import Spline from '@splinetool/react-spline';
import StartNav from './StartNav';

const StartPage = () => {
  return (
    <div className=''>
    <StartNav />
      <div className='fixed  border-2 inset-0'>
        <div className='h-[100%] border-2 w-[100%] scale-[1.20] overflow-hidden'>
          <Spline scene="https://prod.spline.design/pfT474hGRIKmouyw/scene.splinecode" />
        </div>
      </div>
    </div>
  );
};

export default StartPage;

