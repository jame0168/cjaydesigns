import React, { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { Row, Col } from "react-bootstrap";

export function CodeAB() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(TextPlugin);

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

    animateScrub.from(".codeAB", {
      display: "none",
      delay: 5
    });

    animateScrub.from(".codeAB i:first-child", {
      y: 70,
      duration: 0.25
    });

    animateScrub.from(".codeAB i:nth-child(2)", {
      y: 70,
      duration: 0.25
    });

    animateScrub.from(".codeAB i:nth-child(3)", {
      y: 70,
      duration: 0.25
    });
  }, []);

  return (
    <Col
      xs={{ span: 10, offset: 1 }}
      className="codeAB align-items-center justify-content-around w-100 border-top"
    >
      <i className="ri-home-3-line"></i>
      <i className="ri-goblet-line"></i>
      <i className="ri-gift-2-line"></i>
    </Col>
  );
}
