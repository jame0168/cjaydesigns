import React, { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Col } from "react-bootstrap";

export function CodingAnimationBottom() {
  // const [screen, setScreen] = useState(".screen");
  gsap.registerPlugin(ScrollTrigger);

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
      ".codingAnimationBottom",
      {
        y: 0,
        opacity: 0
      },
      {
        duration: 2,
        delay: 7,
        y: -55,
        opacity: 1,
        ease: "power2.inOut"
      }
    );
  }, []);

  return (
    <Col xs={12} className="codingAnimationBottom">
      <div className="p-3">
        <div className="fauxIconContainer p-2 w-100 d-flex justify-content-between">
          <div className="fauxIcons"></div>
          <div className="fauxIcons"></div>
          <div className="fauxIcons"></div>
          <div className="fauxIcons"></div>
        </div>
      </div>
    </Col>
  );
}
