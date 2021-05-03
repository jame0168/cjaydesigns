import React, { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export function DesignAnimationArc() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(MotionPathPlugin);

  useEffect(() => {
    var animateIn = gsap.timeline({
      scrollTrigger: {
        trigger: ".designAnimation",
        start: "top 130px",
        end: "+=1250",
        markers: true,
        toggleActions: "play none none none"
      }
    });

    animateIn.fromTo(
      ".ri-pen-nib-line",
      {
        x: "-270px",
        y: "56.6px",
        scale: 0
      },
      {
        scale: 2.25,
        duration: 1,
        ease: "bounce.out"
      }
    );
  }, []);

  useEffect(() => {
    var animateScrub = gsap.timeline({
      scrollTrigger: {
        trigger: ".designAnimation",
        start: "top 130px",
        end: "+=1000",
        markers: true,
        scrub: true
      }
    });

    animateScrub.to(".ri-pen-nib-line", {
      duration: 7,
      delay: 2,
      ease: "none",
      immediateRender: true,
      motionPath: {
        path: "#path",
        align: "#path",
        alignOrigin: [0, 1]
      }
    });

    animateScrub.to(
      "#path",
      {
        duration: 11.25,
        strokeDashoffset: 0,
        ease: "none"
      },
      "-=7"
    );
  }, []);

  return (
    <React.Fragment>
      <svg viewBox="0 -50 500 500">
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
          <path id="path" d="M51,301 c25,-263 375,-263 400,-1" />
          <path id="path2" d="M250,100 L600,100" />
        </g>
      </svg>
      <i className="ri-pen-nib-line"></i>
    </React.Fragment>
  );
}
