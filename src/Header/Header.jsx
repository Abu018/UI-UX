import React from "react";
import "./../index.css";

export const Header = () => {
  return (
    <div className="animate-slide-from-top">
      <div className="font-gupter flex flex-col xs:flex-row justify-between items-center px-4 xs:px-6 sm:px-10 md:px-20 lg:px-32 xl:px-48 mt-12 text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold animate-fall-in">
        <span>DESIGN</span>
        <span>WITH</span>
        <span>PRINCIPLE</span>
      </div>

      <div className="flex flex-col items-center">
        {/* Second Section: WEB • DEVELOPMENT */}
        <div className="p-5 mt-8 animate-slide-from-bottom">
          <div className="flex flex-col xs:flex-row items-center space-y-4 xs:space-x-3 sm:space-x-4 md:space-x-5 lg:space-x-6 xl:space-x-8 xs:space-y-0">
            <span className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold transition-transform transform hover:translate-y-[-5px] animate-slide-from-bottom">
              D
            </span>
            <span className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold transition-transform transform hover:translate-y-[-5px] animate-slide-from-bottom">
              E
            </span>
            <span className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold transition-transform transform hover:translate-y-[-5px] animate-slide-from-bottom">
              N
            </span>
            <img
              src="./../assests/main.svg"
              className="w-10 xs:w-12 sm:w-14 md:w-16 lg:w-20 xl:w-24 h-auto transition-transform transform hover:scale-125 animate-slide-from-bottom"
              alt="Logo"
            />
            <span className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold transition-transform transform hover:translate-y-[-5px] animate-slide-from-bottom">
              C
            </span>
            <span className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold transition-transform transform hover:translate-y-[-5px] animate-slide-from-bottom">
              O
            </span>
            <span className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold transition-transform transform hover:translate-y-[-5px] animate-slide-from-bottom">
              O
            </span>
            <span className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold transition-transform transform hover:translate-y-[-5px] animate-slide-from-bottom">
              L
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
