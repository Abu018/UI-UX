import React from "react";

export const ExtendTechStack = () => {
  return (
    <div className="flex flex-col lg:flex-row p-6 lg:p-12 gap-12">
      <div className="flex-1">
        <h1 className="text-3xl lg:text-6xl  leading-tight">
          Built on principle and driven by passion, Den.Cool stands is the
          brainchild of Michele Angeloro, a free-spirited Creative and Art
          Director based in Japan.
        </h1>
        <p className="mt-4 text-xl lg:text-6xl">
          With a solid foundation in graphic design and over 15 years of
          experience across leading studios and agencies in Italy, the United
          Kingdom, and Japan, Den.Cool empowers brands by exploring the
          interplay of branding, interface, and motion design.
        </p>
      </div>
      <div className="flex-1 flex flex-col gap-8">
        <div>
          <h2 className="text-base lg:text-base font-bold mb-3">
            INPUT / OUTPUT
          </h2>
          <p className="mb-3 text-base lg:text-base">
            ALWAYS FASCINATED BY FRESH PERSPECTIVES, I LOVE HEARING FROM NEW
            PEOPLE ABOUT THEIR IDEAS, PROJECTS, OR POTENTIAL COLLABORATIONS.
          </p>
          <p className="mb-3 text-base lg:text-base">
            UNSURE OF THE PATH TO STEER YOUR BRAND? LET'S TEAM UP TO CRAFT
            SOMETHING THAT TRULY CAPTURES YOUR BRAND ESSENCE AND SHINES
            BEAUTIFULLY.
          </p>
          <ul className="text-base lg:text-base grid grid-cols-2 gap-y-1">
            <li>BRANDING</li>
            <li>IDENTITY</li>
            <li>DIGITAL</li>
            <li>MOTION</li>
            <li>PRINT</li>
            <li>CGI</li>
            <li>PACKAGING</li>
            <li>EXPERIENTIAL</li>
            <li>SIGNAGE</li>
            <li>INTERACTIVE</li>
            <li>WEB</li>
            <li>APP</li>
          </ul>
        </div>
        <div>
          <h2 className="text-base lg:text-base font-bold mb-3">WORKED WITH</h2>
          <ul className="text-base lg:text-base grid grid-cols-2 gap-y-1">
            <li>ARX RESEARCH</li>
            <li>CANADA GOOSE</li>
            <li>DOCOMO</li>
            <li>MERCARI</li>
            <li>MIZUNO</li>
            <li>MITSUKOSHI ISETAN</li>
            <li>NIKE</li>
            <li>RED BULL</li>
            <li>SHISEIDO</li>
            <li>SONY</li>
            <li>SQUARE</li>
            <li>SUBARU</li>
            <li>TOYOTA</li>
            <li>YAMAHA</li>
          </ul>
        </div>
        <div>
          <h2 className="text-base lg:text-base font-bold mb-3">FEATURED ON</h2>
          <ul className="text-base lg:text-base grid grid-cols-1 gap-y-1">
            <li>AWWWARDS</li>
            <li>FWA</li>
            <li>CSSDA</li>
            <li>365 BEST WEBSITES AROUND THE WORLD 2015 & 2017</li>
            <li>GREATEST CLICKS 2010 & 2016</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
