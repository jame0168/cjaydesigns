import React, { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export function AnimateAnimation() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(MotionPathPlugin);

  useEffect(() => {
    var animateIn = gsap.timeline({
      scrollTrigger: {
        trigger: ".designAnimation",
        start: "top 130px",
        markers: true,
        toggleActions: "play none none reset"
      }
    });
  }, []);

  return (
    <div className="animateAnimation">
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        transform="scale(1.15)"
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
          d="M37.6,-55.7C52,-49.4,69,-44.3,77,-33.3C85.1,-22.2,84.1,-5.1,80.1,10.3C76,25.8,68.8,39.6,57.1,44.9C45.4,50.3,29.2,47.2,15.1,51.2C1,55.2,-10.9,66.4,-25.1,69.5C-39.3,72.6,-55.8,67.7,-61,56C-66.2,44.4,-60,26.1,-61.2,9.5C-62.4,-7,-71,-21.7,-66.4,-29.8C-61.8,-37.9,-44.1,-39.4,-30.8,-46.3C-17.6,-53.2,-8.8,-65.4,1.4,-67.6C11.7,-69.9,23.3,-62.1,37.6,-55.7Z"
          transform="translate(100 100)"
        />
      </svg>
      <div className="fauxScreen position-absolute center" />
    </div>
  );
}
