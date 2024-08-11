import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-white text-black py-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between items-center text-center">
          <div className="mb-6 md:mb-0">
            <img
              src="./assests/img.png"
              alt="abu"
              className="mx-auto md:mx-0"
            />
          </div>

          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">I am Everywhere!</h4>
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/Abu018"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-105 transition-transform duration-200"
              >
                <img
                  src="./assests/gitlogo.svg"
                  alt="GitHub"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://x.com/AbuMoha10808913"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-105 transition-transform duration-200"
              >
                <img
                  src="./assests/twitter.svg"
                  alt="Twitter"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://www.instagram.com/abu_mohammad017/?next=%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-105 transition-transform duration-200"
              >
                <img
                  src="./assests/insta.svg"
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/abubakar-mohammad-326471254/" // Update this with your email address
                className="transform hover:scale-105 transition-transform duration-200"
              >
                <img src="./assests/ll.svg" alt="Email" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
