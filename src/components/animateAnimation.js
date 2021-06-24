import React, { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { AnimateAT } from "./animate/animateAT";
import { AnimateAM } from "./animate/animateAM";
import { AnimateAB } from "./animate/animateAB";

export function AnimateAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    var animateIn = gsap.timeline({
      scrollTrigger: {
        trigger: ".animateAnimation",
        start: "top 130px",
        toggleActions: "play none none none"
      }
    });

    animateIn.to("#faux--slide", { autoAlpha: 1, x: "0%", duration: 1 });
  }, []);

  return (
    <div className="animateAnimation animation-container">
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        transform="scale(1.15)"
        className="fade--in"
      >
        <defs>
          <linearGradient
            id="gradientFill"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#ff9966" />
            <stop offset="50%" stopColor="#ff5e62" />
          </linearGradient>
        </defs>
        <path
          fill="url(#gradientFill)"
          d="M48.3,-62.2C62.8,-55.9,75,-42.1,80,-26.1C85.1,-10.1,83,8.1,76,23.2C69,38.3,57.1,50.2,43.6,61.8C30.1,73.3,15.1,84.4,-1.7,86.8C-18.5,89.1,-37,82.7,-52.3,71.8C-67.6,60.9,-79.8,45.4,-81.9,29C-84,12.6,-76,-4.8,-67.7,-19.4C-59.4,-34,-50.7,-46,-39.4,-53.3C-28,-60.7,-14,-63.4,1.4,-65.4C16.9,-67.4,33.8,-68.5,48.3,-62.2Z"
          transform="translate(100 100)"
        />
      </svg>
      <div className="faux--screen-wrap position-absolute center overflow-hidden p-3">
        <div className="fauxScreen w-100 h-100" id="faux--slide">
          <AnimateAT />
          <div className="faux--area w-100">
            <AnimateAM />
            <AnimateAB />
          </div>
        </div>
      </div>
    </div>
  );
}
