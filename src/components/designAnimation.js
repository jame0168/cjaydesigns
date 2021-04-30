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
      ".ri-pen-nib-line",
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
        end: "+=1000",
        markers: true,
        scrub: true
      }
    });

    animateScrub.to(".ri-pen-nib-line", {
      duration: 5,
      delay: 2,
      ease: "none",
      immediateRender: true,
      motionPath: {
        path: "#path",
        align: "self",
        alignOrigin: [0, 1]
      }
    });

    animateScrub.to(
      "#path",
      {
        duration: 8.25,
        strokeDashoffset: 0,
        ease: "none"
      },
      "-=5"
    );

    animateScrub.fromTo(
      "#pointOne",
      {
        scale: 0,
        motionPath: {
          path: "#path",
          align: "#path",
          start: 0,
          end: 0,
          alignOrigin: [0.5, 0.5]
        }
      },
      {
        scale: 1,
        duration: 0.5
      },
      "-=8"
    );

    animateScrub.fromTo(
      "#pointTwo",
      {
        scale: 0,
        motionPath: {
          path: "#path",
          align: "#path",
          start: 0.5,
          end: 0.5,
          alignOrigin: [0.5, 0.5]
        }
      },
      {
        scale: 1,
        duration: 0.5
      },
      "-=5.5"
    );

    animateScrub.from(
      ".fauxControlHandle",
      {
        scale: 0,
        motionPath: {
          path: "#path",
          align: "#path",
          start: 0.5,
          end: 0.5,
          alignOrigin: [0.5, 0.5]
        }
      },
      "-=5.5"
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
      "-=3.5"
    );
  }, []);

  useEffect(() => {
    var animateWobble = gsap.timeline({
      scrollTrigger: {
        trigger: ".designAnimation",
        start: "1000px 130px",
        markers: true,
        toggleActions: "play none none reset"
      }
    });

    animateWobble.to(
      ".fauxControlHandle",
      {
        rotate: 10,
        duration: 0.5
      }
      // "-=5.5"
    );

    animateWobble.to(
      ".fauxControlHandle",
      {
        rotate: 0,
        duration: 2,
        ease: "elastic"
      }
      // "-=5.5"
    );
  }, []);

  return (
    <div className="designAnimation h-100">
      <div className="text-center position-relative h-100">
        <svg viewBox="0 -50 500 500">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
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
          <path
            id="path"
            stroke="url(#gradient)"
            filter="url(#shadow)"
            d="M51,301 c25,-263 375,-263 400,-1"
          />
        </svg>
        <i className="ri-pen-nib-line"></i>
        <div className="fauxVector position-absolute h-100 w-100 t-0">
          <div className="fauxControlHandle">
            <div className="fauxControlBar"></div>
            <div
              className="fauxControl border-gradient border-gradient-primary"
              id="controlOne"
            ></div>
            <div
              className="fauxControl border-gradient border-gradient-primary"
              id="controlTwo"
            ></div>
          </div>
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
