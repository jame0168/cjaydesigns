import React, { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Col } from "react-bootstrap";

export function CodeAL() {
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

    animateIn.from(".codeAL", {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      delay: 1,
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

    animateScrub.fromTo(
      ".codeAL",
      {
        opacity: 1
      },
      {
        opacity: 0,
        duration: 1,
        ease: "expo.out"
      }
    );

    animateScrub.to(
      ".codeAL",
      {
        x: -250,
        flex: "0 0 0%",
        maxWidth: "0%",
        height: "0%",
        duration: 1,
        ease: "linear"
      },
      "-=1"
    );
  }, []);

  return (
    <Col xs={6} className="pr-0 codeAL align-items-center">
      <div className="p-3">
        <div className="fauxContent d-inline-block">
          <h1 className="font-weight-bold text-uppercase mb-0">Welcome</h1>
          <p>Your weekend starts here</p>
          <div className="faux--button d-inline-block px-2 py-1 text-center">
            Browse Collection
          </div>
        </div>
      </div>
    </Col>
  );
}
