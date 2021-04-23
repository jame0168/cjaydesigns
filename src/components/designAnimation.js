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
      ".fa-pen-nib",
      {
        x: "-150px",
        y: "-210px",
        scale: 0
      },
      {
        scale: 4.25,
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

    animateScrub.to(".fa-pen-nib", {
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
        scale: 0
      },
      {
        scale: 1,
        duration: 0.5
      },
      "-=5"
    );

    animateScrub.fromTo(
      "#pointTwo",
      {
        scale: 0
      },
      {
        scale: 1,
        duration: 0.5
      },
      "-=3.5"
    );

    animateScrub.fromTo(
      "#pointThree",
      {
        motionPath: {
          path: "#path",
          align: "#path",
          alignOrigin: [0.5, 0.5]
        },
        scale: 0
      },
      {
        scale: 1,
        duration: 0.5
      },
      "-=1.5"
    );
  }, []);

  return (
    <div className="designAnimation h-100">
      <div className="text-center position-relative h-100">
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
        <i className="fas fa-pen-nib"></i>
        <div className="fauxVector position-absolute h-100 w-100 t-0">
          <div className="fauxControlBar"></div>
          <div
            className="fauxControl border-gradient border-gradient-primary"
            id="controlOne"
          ></div>
          <div
            className="fauxControl border-gradient border-gradient-primary"
            id="controlTwo"
          ></div>
          <div
            className="fauxPoint rounded border-gradient border-gradient-primary"
            id="pointOne"
          ></div>
          <div
            className="fauxPoint rounded border-gradient border-gradient-primary"
            id="pointTwo"
          ></div>
          <div
            className="fauxPoint rounded border-gradient border-gradient-primary"
            id="pointThree"
          ></div>
        </div>
      </div>
    </div>
  );
}
