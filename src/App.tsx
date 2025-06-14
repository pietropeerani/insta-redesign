import { useEffect, useState } from 'react';
import Header from './components/header';
import ProfileCover from './components/profile-cover';
import Navbar from './components/navbar';
import CarouselStories from './components/carousel-stories';
import Feed from './components/feed';

export default function App() {
  const [isSupportedScreen, setIsSupportedScreen] = useState(window.innerWidth <= 428 && window.innerHeight <= 926);

  useEffect(() => {
    const handleResize = () => {
      setIsSupportedScreen(window.innerWidth <= 428 && window.innerHeight <= 926);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isSupportedScreen) {
    return (
      <>
        <div className="super-ellipse"></div>
        <div className="fixed top-0 left-0 -z-20">
          <div className="absolute z-0 top-1/4 left-0 h-full w-full bg-[linear-gradient(#66D3C200,#00504E_37%)]"></div>
          <img src="/cover.png" alt="" />
        </div>
        <Navbar />


        <Header />
        <ProfileCover />
        <CarouselStories />
        <Feed />
      </>
    );
  } else {
    return (
      <div className="flex justify-center items-center bg-black h-screen">
        <h1 className="!text-9xl font-bold text-white" style={{ fontFamily: 'Instagram Sans' }}>
          Screen unsupported
        </h1>
      </div>
    );
  }
}