import React, { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Row } from "react-bootstrap";

import { CodeAT } from "./code/codeAT";
import { CodeAL } from "./code/codeAL";
import { CodeAR } from "./code/codeAR";
import { CodeAM } from "./code/codeAM";
import { CodeAB } from "./code/codeAB";

export function CodingAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    var animateIn = gsap.timeline({
      scrollTrigger: {
        trigger: ".codingAnimation",
        start: "top 130px",
        end: "+=1250",
        markers: true,
        toggleActions: "play none none none"
      }
    });

    animateIn.from("#codeScreen", {
      duration: 1,
      boxShadow: "rgb(0 0 0/ 0%) 0px 0px 0px 0px",
      borderWidth: "0px",
      background: "rgba( 255, 255, 255, 0.0 )",
      backdropFilter: "blur( 0.0px )",
      ease: "linear"
    });
  }, []);

  useEffect(() => {
    var animateScrub = gsap.timeline({
      scrollTrigger: {
        trigger: ".codingAnimation",
        start: "top -250px",
        end: "+=1250",
        scrub: true
      }
    });

    animateScrub.to("#codeScreen", {
      duration: 7,
      width: 280,
      height: 475,
      borderRadius: 30
    });
  }, []);

  return (
    <div className="codingAnimation">
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
            x2="100%"
            y2="100%"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#ff9966" />
            <stop offset="50%" stopColor="#ff5e62" />
          </linearGradient>
        </defs>
        <path
          fill="url(#gradientFill)"
          d="M34.3,-47.5C48.7,-36.7,67.5,-32.4,73.9,-21.8C80.4,-11.3,74.4,5.5,65.5,17.7C56.6,29.9,44.8,37.6,33.4,43.1C22,48.5,11,51.6,-3.3,56.2C-17.6,60.8,-35.3,66.8,-42.7,60.1C-50.2,53.4,-47.4,33.9,-49.8,18.2C-52.1,2.4,-59.6,-9.7,-57.7,-19.7C-55.7,-29.7,-44.4,-37.6,-33.2,-49.4C-22,-61.3,-11,-77.1,-0.5,-76.4C9.9,-75.7,19.9,-58.4,34.3,-47.5Z"
          transform="translate(100 100)"
        />
      </svg>
      <div className="fauxScreen position-absolute center" id="codeScreen">
        <CodeAT />
        <Row className="fauxSiteContent">
          <CodeAL />
          <CodeAR />
          <CodeAM />
          <CodeAB />
        </Row>
      </div>
    </div>
  );
}
