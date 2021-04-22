import React, { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export function DesignAnimation() {
  // const [screen, setScreen] = useState(".screen");
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
      ".fa-pen-fancy",
      {
        x: "-162px",
        y: "-193px",
        scale: 0
      },
      {
        scale: 3,
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
        end: "+=1250",
        markers: true,
        scrub: true
      }
    });

    animateScrub.to(".fa-pen-fancy", {
      duration: 5,
      delay: 2,
      immediateRender: true,
      motionPath: {
        path: "#path",
        align: "self",
        alignOrigin: [0, 1]
      }
    });

    animateScrub.fromTo(
      "#pointOne",
      {
        x: "260%",
        y: "-555%",
        scale: 0
      },
      {
        scale: 1,
        duration: 0.5
      },
      "-=5"
    );
  }, []);

  return (
    <div className="designAnimation h-100">
      <div className="text-center h-100">
        <svg viewBox="0 -50 500 500">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#ff9966" />
              <stop offset="100%" stop-color="#ff5e62" />
            </linearGradient>
          </defs>
          <path
            id="path"
            stroke="url(#gradient)"
            d="M51,301 c25,-263 375,-263 400,-1"
          />
        </svg>
        <i className="fas fa-pen-fancy"></i>
        <div
          className="fauxVector rounded border-gradient border-gradient-primary"
          id="pointOne"
        ></div>
        {/* <div className="fauxVector rounded border-gradient border-gradient-primary"></div>
        <div className="fauxVector rounded border-gradient border-gradient-primary"></div>
        <div className="fauxControl border-gradient border-gradient-primary"></div>
        <div className="fauxControl border-gradient border-gradient-primary"></div> */}
      </div>
    </div>
  );
}
