import React, { useRef, useContext, useState, useCallback } from 'react';
import Image from 'next/image';
import { ScrollContext } from '../utils/scroll-observer';

const Masthead: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleImageLoaded = useCallback(() => {
    setImageLoaded(true);
  }, []);

  return (
    <div
      ref={refContainer}
      className="min-h-screen flex flex-col items-center justify-center bg-[a2a2a4] sticky top-0 -z-10"
      style={{
        transform: `translateY(-${progress * 20}vh)`,
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover z-[-1]   transition-opacity duration-1000  

        "
      >
        <source src="/assets/bg.webm" type="video/webm; codecs=vp9" />
      </video>
      <div
        className={`flex-grow-0 pt-10 transition-opacity duration-1000 ${
          !imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Image
          src="/assets/TWB-logos_transparent (copy).png"
          alt=""
          width={100}
          height={100}
          className="filter drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]  animate-pulse"
        />
      </div>
      <div className=" font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex items-center justify-center flex-col">
        {/* <h1 className="mb-6 text-5xl xl:text-6xl">🅃🅆🄱</h1> */}

        <h2 className="text-2xl  tracking-tight text-slate-500 ">
          <span>A Digital Work Agency</span>
        </h2>

        <p className="mt-6 text-lg text-slate-900">
          We design and build digital products that solve real problems.
        </p>

        <div className="mt-6">
          <a
            href="#work"
            className="inline-block px-6 py-3 text-lg font-semibold bg-white text-black rounded-full"
          >
            See our work
          </a>
        </div>
      </div>
      <div
        className={`flex-grow-0 pb-20 md:pb-10 transition-all duration-1000 ${
          !imageLoaded ? 'opacity-100' : 'opacity-0 -translate-y-10'
        }`}
      >
        <Image
          src="/assets/arrow-down.png"
          alt="scroll down"
          width={188 / 3}
          height={105 / 3}
          onLoad={handleImageLoaded}
        />
      </div>
    </div>
  );
};

export default Masthead;
