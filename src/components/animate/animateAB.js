import React, { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Row, Col } from "react-bootstrap";

export function AnimateAB() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    var animateIn = gsap.timeline({
      scrollTrigger: {
        trigger: ".animateAnimation",
        start: "top 130px",
        toggleActions: "play none none none"
      }
    });

    animateIn.from(".faux--bottom", {
      y: "100%",
      ease: "power2.out",
      delay: 0.5,
      duration: 0.5
    });
  }, []);

  return (
    <div className="faux--screen faux--bottom bd-none border-bottom-0 border-left-0 border-right-0 w-100 mt-3">
      <div className="faux--scrub position-absolute">
        <i className="ri-home-6-fill"></i>
        <div className="border h-75 mx-auto"></div>
      </div>
      <Row>
        <Col xs={3} className="rounded" />
      </Row>
      <Row>
        <Col xs={{ span: 6, offset: 3 }} className="rounded" />
      </Row>
      <Row>
        <Col xs={{ span: 1, offset: 9 }} className="rounded" />
      </Row>
      <Row>
        <Col xs={{ span: 2, offset: 10 }} className="rounded" />
      </Row>
    </div>
  );
}
