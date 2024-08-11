import React, { useState, useEffect } from "react";
import projects from "../backend/index";
import "./../index.css";
import TechTack from "./techTack";
import { ExtendTechStack } from "./extendTechStack";

function Main() {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [showEmailPrompt, setShowEmailPrompt] = useState(false);
  const [progress, setProgress] = useState(0);
  const [emailValue, setEmailValue] = useState("");
  const [emailProgress, setEmailProgress] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const calculateProgress = () => {
      if (inputValue.length > 0) {
        let progressValue = (inputValue.length / 50) * 100;
        if (progressValue > 100) progressValue = 100;
        setProgress(progressValue);
      } else {
        setProgress(0);
      }
    };

    calculateProgress();
  }, [inputValue]);

  useEffect(() => {
    const calculateEmailProgress = () => {
      if (emailValue.length > 0) {
        let progressValue = (emailValue.length / 50) * 100;
        if (progressValue > 100) progressValue = 100;
        setEmailProgress(progressValue);
      } else {
        setEmailProgress(0);
      }
    };

    calculateEmailProgress();
  }, [emailValue]);

  const handleParagraphClick = () => {
    setShowInput(true);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      setShowInput(false);
      setShowEmailPrompt(true);
    } else {
      setProgress(0);
    }
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    setShowEmailPrompt(false);
    setIsSubmitted(true);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <div className="flex flex-col items-center mb-8 animate-slide-from-top">
        <div className="text-center font-gupter font-semibold rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-2">
            I AM MOHAMMAD ABUBAKAR, A GRADUATE AND FULL-STACK DEVELOPER.
          </p>

          <a
            href="#footer-section"
            className="bg-black hover:bg-blue-700 text-white font-light py-3 px-6 rounded-full transition-all duration-300 mt-4 inline-block text-lg"
            target="_self"
            rel="noopener noreferrer"
          >
            Chai with Me
          </a>
        </div>
      </div>

      <div
        id="projects-section"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 animate-slide-from-bottom"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className={`border p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 rounded-lg shadow-lg flex flex-col ${
              project.id === 5 ? "animate-pulse" : ""
            } animate-slide-from-bottom`}
          >
            <div className="relative w-full h-80 sm:h-96 md:h-104 lg:h-120 xl:h-140 overflow-hidden mb-4">
              <img
                src={project.imageUrl}
                srcSet={`${project.imageUrl} 1x, ${project.imageUrl}@2x 2x`}
                alt={project.name}
                className="w-full h-auto object-cover"
              />
            </div>
            <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold mb-2">
              {project.name}
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-700 mb-2">
              {project.description}
            </p>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-500">
              Tech Stack: {project.techStack.join(", ")}
            </p>
            {project.id === 5 && (
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-900 mt-2 animate-pulse">
                Presently working on
              </p>
            )}
          </div>
        ))}
      </div>
      <div className="my-8">
        <TechTack />
      </div>
      <div className="my-8">
        <ExtendTechStack />
      </div>

      <div
        id="footer-section"
        className="flex flex-col justify-center items-center mt-12 space-y-4 animate-slide-from-bottom"
      >
        <h1 className="text-3xl font-bold">Chai With Me.</h1>
        <p
          className="text-2xl lg:text-2xl cursor-pointer text-center"
          onClick={handleParagraphClick}
        >
          I am always excited to work on some awesome projects
          <span className="block mt-2">
            Send me a message and let's talk over Chai.
          </span>
        </p>
        {showInput && !showEmailPrompt && (
          <form
            id="theForm"
            className="simform w-full max-w-lg mx-auto flex flex-col items-center"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <div className="simform-inner flex flex-grow w-full max-w-lg">
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Write your message here..."
                className="border-2 border-white p-3 text-xl lg:text-2xl rounded-l w-full bg-transparent text-gray-800 outline-none focus:border-white focus:ring-0"
              />
              <button
                type="submit"
                className="bg-black hover:bg-black text-white font-light py-2 px-4 rounded-r flex items-center"
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            {progress > 0 && (
              <div className="relative w-full mt-2">
                <div
                  className="bg-black h-2 rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            )}
          </form>
        )}
        {showEmailPrompt && (
          <form
            id="emailForm"
            className="w-full max-w-lg mx-auto flex flex-col items-center"
            autoComplete="off"
            onSubmit={handleEmailSubmit}
          >
            <div className="flex items-center w-full">
              <input
                type="email"
                value={emailValue}
                onChange={handleEmailChange}
                placeholder="Enter your email..."
                className="border-2 border-white p-3 text-xl lg:text-2xl rounded-l w-full bg-transparent text-gray-800 outline-none focus:border-white focus:ring-0"
                required
              />
              <button
                type="submit"
                className="bg-black hover:bg-black text-white font-light py-2 px-4 rounded-r flex items-center"
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            {emailProgress > 0 && (
              <div className="relative w-full mt-2">
                <div
                  className="bg-black h-2 rounded-full"
                  style={{ width: `${emailProgress}%` }}
                ></div>
              </div>
            )}
          </form>
        )}
        {isSubmitted && (
          <p className="text-lg mt-4 text-blue-400">
            Thank you! Your email has been sent.
          </p>
        )}
      </div>
    </div>
  );
}

export default Main;
