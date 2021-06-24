import React, { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Col } from "react-bootstrap";

export function CodeAR() {
  // const [screen, setScreen] = useState(".screen");
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    var animateIn = gsap.timeline({
      scrollTrigger: {
        trigger: ".codingAnimation",
        start: "top 130px",
        end: "+=1250",
        toggleActions: "play none none none"
      }
    });

    animateIn.from(".codeAR", {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      delay: 1.25,
      ease: "back.out(1)"
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

    animateScrub.to(".codeAR", {
      duration: 1.5,
      delay: 1.05,
      flex: "0 0 100%",
      height: 150,
      maxWidth: "95%",
      ease: "linear"
    });

    animateScrub.to(
      ".fauxContent",
      {
        y: 15,
        ease: "linear"
      },
      "-=1.5"
    );

    animateScrub.fromTo(
      ".fauxContent img",
      {
        width: "95%",
        x: "-5%",
        ease: "linear"
      },
      {
        duration: 1.5,
        x: 3,
        y: 5,
        rotation: -67,
        width: "45%",
        ease: "linear"
      },
      "-=1.5"
    );

    animateScrub.fromTo(
      ".fauxContent .dot",
      {
        opacity: 0,
        ease: "linear"
      },
      {
        opacity: 0.35,
        ease: "linear"
      },
      "-=1.5"
    );
  }, []);

  return (
    <Col xs={6} className="pl-0 codeAR">
      <div className="p-0">
        <div className="fauxContent d-inline-block text-center">
          <span className="dot"></span>
          <img alt="Wine Bottle" src="img/clay_bottle.png" />
        </div>
      </div>
    </Col>
  );
}
