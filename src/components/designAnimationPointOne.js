import React, { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export function PointAnimationOne() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(MotionPathPlugin);

  useEffect(() => {
    var animatePoints = gsap.timeline({
      scrollTrigger: {
        trigger: ".designAnimation",
        start: "130px 130px",
        markers: true,
        toggleActions: "play none none reset"
      }
    });

    animatePoints.from("#pointTitleOne", {
      x: -15,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    animatePoints.from(
      ".pointLinesOne",
      {
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      },
      "-=1"
    );

    animatePoints.from(".fauxDivTop", {
      y: -15,
      opacity: 0,
      duration: 0.25,
      ease: "back.out(1)"
    });

    animatePoints.from(
      ".fauxDivLeft",
      {
        x: -15,
        y: 15,
        opacity: 0,
        duration: 0.25,
        ease: "back.out(1)"
      },
      "-=0.25"
    );

    animatePoints.from(
      ".fauxDivRight",
      {
        x: 15,
        y: 15,
        opacity: 0,
        duration: 0.25,
        ease: "back.out(1)"
      },
      "-=0.25"
    );
  }, []);

  return (
    <React.Fragment>
      <div
        className="pointAnimation d-flex align-items-center"
        id="pointAnimationOne"
      >
        <h4
          className="pointTitle text-uppercase text-left d-inline-block mb-0"
          id="pointTitleOne"
        >
          <span style={{ fontWeight: "400" }}>UX/UI</span>
          <br />
          <span className="font-weight-bold">Design</span>
        </h4>
        <div className="fauxContainer d-inline-block">
          <div className="fauxDiv fauxDivTop border-gradient border-gradient-primary"></div>
          <hr className="pointLinesOne" />
          <div className="fauxDiv fauxDivLeft border-gradient border-gradient-primary"></div>
          <div className="pointLinesOne vr"></div>
          <div className="fauxDiv fauxDivRight border-gradient border-gradient-primary"></div>
        </div>
      </div>
    </React.Fragment>
  );
}
