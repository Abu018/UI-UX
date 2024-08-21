import React from "react";

export const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex flex-col items-center justify-center">
        <div className="relative group">
          <h1 className="text-4xl lg:text-8xl font-bold uppercase mb-6 text-center transition-all duration-300 ease-in-out transform group-hover:-rotate-6 group-hover:text-gray-400">
            LET'S WORK TOGETHER
            <span className="absolute inset-0 flex items-center justify-center">
              <button className="bg-black text-white text-sm lg:text-lg rounded-full px-6 py-3 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                COPY EMAIL TO CLIPBOARD
              </button>
            </span>
          </h1>
        </div>
        <div className="relative w-24 h-24 group mt-8">
          <img
            src="/assests/den.svg"
            alt="den"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
          />
          <img
            src="/assests/den2.svg"
            alt="den2"
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </div>
      </div>

      {/* Added this section for the "DEN.COOL © 2024" text */}
      <div className="mt-12 text-center">
        <p className="text-sm lg:text-base font-medium text-black">
          DEN.COOL
          <br />© 2024
        </p>
      </div>
    </div>
  );
};
