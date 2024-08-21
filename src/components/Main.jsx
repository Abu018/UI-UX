import React from "react";
import projects from "../backend/index";
import "./../index.css";
import "./Main.css";
import TechTack from "./techTack";
import { ExtendTechStack } from "./extendTechStack";

function Main() {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <div className="flex flex-col items-center mb-8 animate-slide-from-top">
        <p className="text-center font-gupter font-semibold p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-2">
          A Small Independent Design Studio Rooted In Exploring The Interplay of
          Branding
          <br />
          Interface And Motion Design.
        </p>
      </div>

      <div
        id="projects-section"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-6"
      >
        {/* Render projects with consistent image sizes and spacing */}
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="relative w-full max-w-[200px] max-h-[270px] mx-auto"
            style={{
              transform:
                index < 6
                  ? `translate(${(index % 2) * 20}px, ${
                      Math.floor(index / 2) * 20
                    }px)`
                  : "none",
            }}
          >
            <img
              src={project.imageUrl}
              srcSet={`${project.imageUrl} 1x, ${project.imageUrl}@2x 2x`}
              alt={`Project ${project.id}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="my-8">
        <TechTack />
      </div>
      <div className="my-8">
        <ExtendTechStack />
      </div>
    </div>
  );
}

export default Main;
