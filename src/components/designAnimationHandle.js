import React, { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export function DesignAnimationHandle() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(MotionPathPlugin);

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

    animateScrub.to("#path2", {
      duration: 2,
      delay: 1.75,
      strokeDasharray: "350 350",
      strokeDashoffset: 0,
      ease: "none",
      motionPath: {
        path: "#path",
        align: "#path",
        start: 0.5,
        end: 0.5,
        alignOrigin: [0.5, 0.5]
      }
    });

    animateScrub.from(
      ".fauxControlHandle",
      {
        scale: 1,
        motionPath: {
          path: "#path",
          align: "#path",
          start: 0.5,
          end: 0.5,
          alignOrigin: [0.5, 0.5]
        }
      },
      "-=3.5"
    );

    animateScrub.from(
      "#controlOne, #controlTwo",
      {
        scale: 0,
        duration: 0.5,
        ease: "bounce.out"
      },
      "-=0.15"
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

    animateWobble.to(".fauxControlHandle", {
      rotate: 10,
      duration: 0.5,
      delay: 0.5
    });

    animateWobble.to(
      "#path2",
      {
        rotate: 10,
        duration: 0.5
      },
      "-=0.5"
    );

    animateWobble.to(".fauxControlHandle", {
      rotate: 0,
      duration: 2,
      ease: "elastic"
    });

    animateWobble.to(
      "#path2",
      {
        rotate: 0,
        duration: 2,
        ease: "elastic"
      },
      "-=2"
    );
  }, []);

  return (
    <div className="fauxControlHandle">
      {/* <div className="fauxControlBar"></div> */}
      <div
        className="fauxControl border-gradient border-gradient-primary"
        id="controlOne"
      ></div>
      <div
        className="fauxControl border-gradient border-gradient-primary"
        id="controlTwo"
      ></div>
    </div>
  );
}
