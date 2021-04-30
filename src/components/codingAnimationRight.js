import React, { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Col } from "react-bootstrap";

export function CodingAnimationRight() {
  // const [screen, setScreen] = useState(".screen");
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

    animateIn.fromTo(
      ".fauxContent",
      {
        width: "0%"
      },
      {
        width: "100%",
        duration: 1,
        delay: 1,
        ease: "bounce.out"
      }
    );

    animateIn.fromTo(
      ".fauxTitle",
      {
        width: 0
      },
      {
        width: 134,
        duration: 1,
        ease: "bounce.out"
      },
      "-=1"
    );
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

    animateScrub.to(".codingAnimationRight", {
      duration: 2,
      delay: 5,
      minWidth: "95%",
      ease: "power2.inOut"
    });
  }, []);

  return (
    <Col xs={7} className="pl-0 codingAnimationRight">
      <div className="p-3">
        <div className="fauxText fauxTitle"></div>
        <div className="fauxText fauxContent"></div>
        <div className="fauxText fauxContent"></div>
        <div className="fauxText fauxContent"></div>
        <div className="fauxText fauxContent"></div>
      </div>
    </Col>
  );
}
