import React, { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export function DesignCT() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(MotionPathPlugin);

  useEffect(() => {
    var animateIn = gsap.timeline({
      scrollTrigger: {
        trigger: ".designAnimation",
        start: "top 130px",
        toggleActions: "play none none reset"
      }
    });

    animateIn.fromTo(
      "#drawnPencil",
      {
        scale: 0.75,
        motionPath: {
          path: "#drawnPath",
          align: "#drawnPath",
          alignOrigin: [0, 1],
          start: 0,
          end: 0
        },
        opacity: 0
      },
      {
        opacity: 1,
        duration: 0.5,
        delay: 2.5
      }
    );

    animateIn.to("#drawnPath", {
      duration: 1,
      delay: 1,
      strokeDashoffset: 0,
      ease: "none"
    });

    animateIn.to(
      "#drawnPencil",
      {
        duration: 0.86,
        ease: "none",
        motionPath: {
          path: "#drawnPath",
          align: "#drawnPath",
          alignOrigin: [0, 1],
          start: 0,
          end: 1
        }
      },
      "-=1"
    );

    animateIn.to(
      "#drawnPencil img",
      {
        x: -55,
        y: -15
      },
      "-=0.6"
    );
  }, []);

  return (
    <svg version="1.1" viewBox="0 0 1000 750">
      <defs>
        <linearGradient
          id="gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#ff9966" />
          <stop offset="100%" stopColor="#ff5e62" />
        </linearGradient>
        <filter id="shadow">
          <feDropShadow dx="0" dy="5" stdDeviation="5" floodOpacity="0.15" />
        </filter>
      </defs>
      <g stroke="url(#gradient)" filter="url(#shadow)">
        <path
          id="drawnPath"
          d="m41 373c49-115.5 97.5-231 153-231 111 0 195 463 306 462.5s195-462.5 306-462.5c55.5 0 104.5 115.5 153 231"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
