import React, { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import { PointAnimationOne } from "./designAnimationPointOne";
import { PointAnimationThree } from "./designAnimationPointThree";

export function DesignAnimationPoints() {
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
      <div
        className="pointAnimation d-flex align-items-center"
        id="pointAnimationTwo"
      >
        <h4
          className="pointTitle text-uppercase text-left d-inline-block mb-0"
          id="pointTitleTwo"
        >
          <span>Graphic</span>
          <br />
          <span>Design</span>
        </h4>
      </div>
      <div
        className="fauxPoint rounded border-gradient border-gradient-primary"
        id="pointThree"
      ></div>
      <PointAnimationThree />
    </React.Fragment>
  );
}
