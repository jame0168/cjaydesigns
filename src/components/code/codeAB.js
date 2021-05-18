import React, { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { Col } from "react-bootstrap";

export function CodeAB() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(TextPlugin);

  useEffect(() => {
    var animateScrub = gsap.timeline({
      scrollTrigger: {
        trigger: ".codingAnimation",
        start: "top -250px",
        end: "+=1250",
        scrub: true
      }
    });

    animateScrub.from(".codeAB", {
      display: "none",
      delay: 5
    });

    animateScrub.from(".codeAB i", {
      y: 70,
      duration: 0.25,
      stagger: 0.25
    });

    animateScrub.from(
      ".codeAB .activeOption",
      {
        y: 70,
        duration: 0.25
      },
      "-=0.5"
    );
  }, []);

  return (
    <Col
      xs={{ span: 10, offset: 1 }}
      className="codeAB align-items-center justify-content-around w-100 border-top"
    >
      <i className="ri-home-3-line"></i>
      <i className="ri-goblet-fill"></i>
      <i className="ri-gift-2-line"></i>
      <span className="activeOption d-inline-block position-absolute"></span>
    </Col>
  );
}
