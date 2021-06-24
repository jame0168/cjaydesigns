import React, { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import { DesignFG } from "./design/designFG";

export function DesignAnimation() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(MotionPathPlugin);

  useEffect(() => {
    var animateIn = gsap.timeline({
      scrollTrigger: {
        trigger: ".designAnimation",
        start: "top 130px",
        toggleActions: "play none none none"
      }
    });

    animateIn.fromTo(
      "#fauxTablet",
      {
        x: "-70%",
        y: "-20%",
        opacity: 0
      },
      {
        x: "-60%",
        y: "-20%",
        opacity: 1,
        delay: 1,
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
  }, []);

  return (
    <div className="designAnimation animation-container">
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
          d="M45.5,-70.6C56.9,-63.6,62.4,-47.3,63.5,-32.6C64.6,-17.9,61.2,-4.8,56.6,6.2C52,17.3,46.3,26.2,40.5,37.7C34.6,49.2,28.7,63.3,17.9,71C7.2,78.8,-8.4,80.2,-22.9,76.5C-37.3,72.9,-50.7,64.2,-55.6,51.9C-60.4,39.6,-56.7,23.6,-55.6,10C-54.4,-3.6,-55.7,-14.8,-50.4,-21.5C-45,-28.2,-33,-30.4,-23.5,-38.2C-14,-46,-7,-59.5,5.1,-67.4C17.1,-75.2,34.2,-77.6,45.5,-70.6Z"
          transform="translate(100 100)"
        />
      </svg>
      <div className="position-absolute center-no-translate" id="fauxTablet">
        <img alt="Tablet" src="img/clay_tablet.png" />
        <DesignFG id="bottomGlass" />
        <DesignFG id="topGlass" innerID="draw" content={true} />
      </div>
      <div className="position-absolute center-no-translate" id="drawnPencil">
        <img alt="Stylus" src="img/clay_stylus.png" />
      </div>
    </div>
  );
}
