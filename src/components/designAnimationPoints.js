import React, { useRef, useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import { PointAnimationOne } from "./designAnimationPointOne";
import { PointAnimationTwo } from "./designAnimationPointTwo";
import { PointAnimationThree } from "./designAnimationPointThree";

export function DesignAnimationPoints() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(MotionPathPlugin);

  let pointOneRef = useRef(null);

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
        duration: 0.5,
        delay: 0.2
      }
    );

    animateScrub.from("#pointAnimationOne", {
      scale: 1,
      motionPath: {
        path: "#path",
        align: "#path",
        start: 0,
        end: 0,
        alignOrigin: [1, 0]
      }
    });

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
      "-=0.15"
    );

    animateScrub.from("#pointAnimationTwo", {
      scale: 1,
      motionPath: {
        path: "#path",
        align: "#path",
        start: 0.5,
        end: 0.5,
        alignOrigin: [0.5, 1]
      }
    });

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
      "-=0.25"
    );

    animateScrub.from("#pointAnimationThree", {
      scale: 1,
      motionPath: {
        path: "#path",
        align: "#path",
        start: 1,
        end: 1,
        alignOrigin: [0, 0]
      }
    });
  }, []);

  return (
    <React.Fragment>
      <div
        className="fauxPoint rounded border-gradient border-gradient-primary"
        id="pointOne"
      ></div>
      <PointAnimationOne />
      <div
        className="fauxPoint rounded border-gradient border-gradient-primary"
        id="pointTwo"
      ></div>
      <PointAnimationTwo />
      <div
        className="fauxPoint rounded border-gradient border-gradient-primary"
        id="pointThree"
      ></div>
      <PointAnimationThree />
    </React.Fragment>
  );
}
