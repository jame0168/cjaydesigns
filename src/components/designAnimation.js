import React, { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export function DesignAnimation() {
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

    animateIn.fromTo(
      "#fauxTablet",
      {
        x: "-70%",
        y: "-10%",
        opacity: 0
      },
      {
        x: "-60%",
        y: "-10%",
        opacity: 1,
        duration: 0.5,
        ease: "back.out(1)"
      }
    );

    animateIn.fromTo(
      "#bottomGlass",
      {
        x: "-60%",
        y: "-35%",
        opacity: 0
      },
      {
        x: "-50%",
        y: "-50%",
        opacity: 1,
        duration: 0.5,
        ease: "back.out(1)"
      },
      "-=0.1"
    );

    animateIn.fromTo(
      "#topGlass",
      {
        x: "-60%",
        y: "-35%",
        opacity: 0
      },
      {
        x: "-51%",
        y: "-48%",
        opacity: 1,
        duration: 0.5,
        ease: "back.out(1)"
      },
      "-=0.1"
    );

    animateIn.to("#drawPath", {
      duration: 1,
      delay: 0.5,
      strokeDashoffset: 0,
      ease: "none"
    });

    animateIn.to(
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
    <div className="designAnimation">
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
          d="M25.2,-31.4C34.8,-27.6,46.5,-23.2,53.2,-14.5C59.9,-5.7,61.6,7.4,61.1,23.2C60.5,38.9,57.7,57.2,47.2,64.2C36.6,71.1,18.3,66.7,0.6,65.8C-17,65,-34.1,67.7,-43.1,60.2C-52.2,52.8,-53.2,35.2,-59.2,18.7C-65.3,2.3,-76.3,-13.1,-76.9,-29.2C-77.5,-45.4,-67.7,-62.5,-53.1,-64.7C-38.5,-67,-19.3,-54.4,-5.8,-46.5C7.7,-38.5,15.5,-35.2,25.2,-31.4Z"
          transform="translate(100 100)"
        />
      </svg>
      <div className="fauxGlass position-absolute" id="fauxTablet">
        <img alt="Tablet" src="img/clay_tablet.png" />
        <div
          className="fauxGlass position-absolute w-100 h-100"
          id="bottomGlass"
          style={{ perspective: 800 }}
        >
          <div className="fauxScreen position-absolute" />
        </div>
        <div
          className="fauxGlass position-absolute w-100 h-100"
          id="topGlass"
          style={{ perspective: 800 }}
        >
          <div className="fauxScreen position-absolute" id="draw">
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
          </div>
        </div>
      </div>
      {/* <svg
        id="pencil"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <defs>
          <filter id="shadow">
            <feDropShadow dx="0" dy="5" stdDeviation="5" floodOpacity="0.15" />
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
      </svg> */}
    </div>
  );
}
