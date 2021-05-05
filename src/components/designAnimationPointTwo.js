import React, { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export function PointAnimationTwo() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(MotionPathPlugin);

  useEffect(() => {
    var animatePoints = gsap.timeline({
      scrollTrigger: {
        trigger: ".designAnimation",
        start: "450px 130px",
        markers: true,
        toggleActions: "play none none reset"
      }
    });

    animatePoints.from(".fauxBoard", {
      scale: 0,
      duration: 0.5,
      ease: "bounce.out"
    });

    animatePoints.from(
      "#drawPencil",
      {
        scale: 0,
        duration: 0.5,
        ease: "bounce.out",
        motionPath: {
          path: "#drawPath",
          align: "#drawPath",
          alignOrigin: [0, 1],
          start: 0,
          end: 0
        }
      },
      "-=0.5"
    );

    animatePoints.from(
      "#pointTitleTwo span:first-child",
      {
        x: -50,
        opacity: 0,
        duration: 0.25,
        ease: "power1.out"
      },
      "-=0.5"
    );

    animatePoints.from(
      "#pointTitleTwo span:nth-child(3)",
      {
        x: 50,
        opacity: 0,
        duration: 0.25,
        ease: "power1.out"
      },
      "-=0.5"
    );

    animatePoints.to("#drawPath", {
      duration: 1,
      delay: 0.5,
      strokeDashoffset: 0,
      ease: "none"
    });

    animatePoints.to(
      "#drawPencil",
      {
        duration: 0.9,
        ease: "none",
        motionPath: {
          path: "#drawPath",
          align: "#drawPath",
          alignOrigin: [0, 1],
          start: 0,
          end: 1
        }
      },
      "-=1"
    );
  }, []);

  return (
    <React.Fragment>
      <div className="pointAnimation" id="pointAnimationTwo">
        <div className="d-flex align-items-center">
          <h4
            className="pointTitle text-uppercase text-left d-inline-block mb-0 mr-1"
            id="pointTitleTwo"
          >
            <span className="font-weight-bold d-inline-block">Graphic</span>
            <br />
            <span className="pl-5 d-inline-block">Design</span>
          </h4>
          <div className="fauxBoard border-gradient border-gradient-primary rounded">
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
                  <feDropShadow
                    dx="0"
                    dy="5"
                    stdDeviation="5"
                    floodOpacity="0.15"
                  />
                </filter>
              </defs>
              <g stroke="url(#gradient)" filter="url(#shadow)">
                <path
                  id="drawPath"
                  d="m41 373c49-115.5 97.5-231 153-231 111 0 195 463 306 462.5s195-462.5 306-462.5c55.5 0 104.5 115.5 153 231"
                  strokeLinecap="round"
                />
              </g>
            </svg>
            <svg
              id="draw"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <defs>
                <filter id="shadow">
                  <feDropShadow
                    dx="0"
                    dy="5"
                    stdDeviation="5"
                    floodOpacity="0.15"
                  />
                </filter>
              </defs>
              <g>
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  id="drawPencil"
                  stroke="#212529"
                  filter="url(#shadow)"
                  fill="white"
                  strokeDasharray="0"
                  strokeoffset="0"
                  d="M12.9 6.858l4.242 4.243L7.242 21H3v-4.243l9.9-9.9zm1.414-1.414l2.121-2.122a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242z"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
