import React, { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Row } from "react-bootstrap";

import { CodingAnimationTop } from "./codingAnimationTop";
import { CodingAnimationLeft } from "./codingAnimationLeft";
import { CodingAnimationRight } from "./codingAnimationRight";
import { CodingAnimationBottom } from "./codingAnimationBottom";

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

    animateIn.from(".fauxScreen", {
      duration: 1,
      boxShadow: "rgb(0 0 0/ 0%) 0px 0px 0px 0px"
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

    animateScrub.to(".fauxScreen", {
      duration: 3,
      width: 280,
      height: 475,
      borderRadius: 30
    });
  }, []);

  return (
    <div className="codingAnimation">
      <div className="fauxScreen">
        <CodingAnimationTop />
        <Row>
          <CodingAnimationLeft />
          <CodingAnimationRight />
          <CodingAnimationBottom />
        </Row>
      </div>
    </div>
  );
}
