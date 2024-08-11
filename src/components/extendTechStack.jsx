import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const ExtendTechStack = () => {
  return (
    <div className="w-full h-[300px] flex items-center justify-center">
      <div className="relative w-full max-w-4xl h-full p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded-lg bg-white overflow-hidden">
        <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center text-black">
          Interests
        </h2>
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          showStatus={false}
          showIndicators={false} // Set to false to hide the circle indicators
          className="relative text-center"
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full shadow-md"
              >
                <img
                  src="./assests/arrow2.svg"
                  alt="Previous"
                  className="w-6 sm:w-8 h-6 sm:h-8"
                />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full shadow-md"
              >
                <img
                  src="./assests/arrow1.svg"
                  alt="Next"
                  className="w-6 sm:w-8 h-6 sm:h-8"
                />
              </button>
            )
          }
        >
          <div className="flex flex-col items-center">
            <p className="mt-2 text-base xs:text-lg sm:text-xl md:text-1xl lg:text-2xl italic text-black">
              "Exploring the potential of AI to transform industries and improve
              lives."
            </p>
            <p className="mt-1 text-base xs:text-lg sm:text-xl md:text-1xl lg:text-2xl text-black">
              Developing expertise in <strong>Artificial Intelligence</strong>
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="mt-2 text-base xs:text-lg sm:text-xl md:text-1xl lg:text-2xl text-black">
              "Harnessing cloud technology to build scalable and efficient
              solutions."
            </p>
            <p className="mt-1 text-base xs:text-lg sm:text-xl md:text-1xl lg:text-2xl text-black">
              Enhancing skills in <strong>Cloud Computing</strong>
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="mt-2 text-base xs:text-lg sm:text-xl md:text-1xl lg:text-2xl italic text-black">
              "Utilizing ML algorithms to create data-driven insights and
              predictions."
            </p>
            <p className="mt-1 text-base xs:text-lg sm:text-xl md:text-1xl lg:text-2xl text-black">
              Focusing on <strong>Machine Learning</strong>
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="mt-2 text-base xs:text-lg sm:text-xl md:text-1xl lg:text-2xl italic text-black">
              "Gaining proficiency in low-level languages to understand hardware
              interactions."
            </p>
            <p className="mt-1 text-base xs:text-lg sm:text-xl md:text-1xl lg:text-2xl text-black">
              Deepening knowledge in <strong>Low-Level Languages</strong>
            </p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};
