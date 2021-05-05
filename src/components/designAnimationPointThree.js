import React, { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { TextPlugin } from "gsap/TextPlugin";

export function PointAnimationThree() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(MotionPathPlugin);
  gsap.registerPlugin(TextPlugin);

  const n = 5; // Or something else
  const lines = [...Array(n)].map((e, i) => (
    <React.Fragment>
      <div key={i}>
        <div className="fauxText w-75 mx-auto my-1"></div>
        <div className="fauxText w-75 mx-auto my-1"></div>
        <div className="fauxText w-75 mx-auto my-1"></div>
        <div
          className="fauxDiv w-75 mx-auto border-gradient border-gradient-primary"
          style={{ height: "20px" }}
        ></div>
      </div>
    </React.Fragment>
  ));

  useEffect(() => {
    var animatePoints = gsap.timeline({
      scrollTrigger: {
        trigger: ".designAnimation",
        start: "750px 130px",
        markers: true,
        toggleActions: "play none none reset"
      }
    });

    animatePoints.from(".fauxDevice", {
      scale: 0,
      duration: 0.5,
      ease: "bounce.out"
    });

    animatePoints.to("#pointTitleThree span:first-child", {
      text: "Prototyping",
      duration: 1
    });

    animatePoints.to("#pointTitleThree span:nth-child(3)", {
      text: " & Mock-ups",
      duration: 1
    });

    animatePoints.to(
      ".fauxScroll",
      {
        y: -175,
        duration: 5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: 3
      },
      "-=1"
    );
  }, []);

  return (
    <React.Fragment>
      <div
        className="pointAnimation d-flex align-items-center"
        id="pointAnimationThree"
      >
        <div className="fauxContainer fauxDevice overflow-hidden border-gradient border-gradient-primary">
          <div className="fauxMobileScreen overflow-hidden">
            <div className="fauxScroll">{lines}</div>
          </div>
          <div className="fauxPanel border-gradient border-gradient-primary d-flex align-items-center">
            <div className="dot mx-auto"></div>
          </div>
        </div>
        <h4
          className="pointTitle text-uppercase text-left d-inline-block mb-0"
          id="pointTitleThree"
        >
          <span></span>
          <br />
          <span className="font-weight-bold"></span>
        </h4>
      </div>
    </React.Fragment>
  );
}
