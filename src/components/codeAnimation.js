import React, { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Row } from "react-bootstrap";

import { CodeAT } from "./code/codeAT";
import { CodeAL } from "./code/codeAL";
import { CodeAR } from "./code/codeAR";
import { CodeAM } from "./code/codeAM";
import { CodeAB } from "./code/codeAB";

export function CodeAnimation() {
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
          d="M40,-63.8C52.9,-53.9,65.1,-44.6,67.7,-32.7C70.4,-20.8,63.4,-6.3,63,10.3C62.5,27,68.5,45.8,62.2,54.8C55.8,63.9,37.1,63.1,21.9,61.6C6.8,60,-4.7,57.6,-15.5,53.9C-26.3,50.2,-36.3,45.2,-46,37.8C-55.6,30.3,-64.8,20.5,-70.5,7.6C-76.3,-5.2,-78.6,-21.1,-72.5,-32.6C-66.4,-44,-51.9,-51.1,-38.4,-60.6C-24.9,-70.2,-12.5,-82.2,0.5,-83.1C13.6,-83.9,27.1,-73.6,40,-63.8Z"
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
