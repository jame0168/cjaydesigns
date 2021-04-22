import React, { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Col } from "react-bootstrap";

export function CodingAnimationLeft() {
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
      ".fauxImages",
      {
        scale: 0
      },
      {
        scale: 1,
        duration: 1,
        delay: 1,
        ease: "bounce.out"
      }
    );
  });

  useEffect(() => {
    var animateScrub = gsap.timeline({
      scrollTrigger: {
        trigger: ".codingAnimation",
        start: "top -250px",
        end: "+=1250",
        scrub: true
      }
    });

    animateScrub.to(".codingAnimationLeft", {
      duration: 2,
      maxWidth: 0,
      delay: 4,
      ease: "power2.inOut"
    });
  });

  return (
    <Col xs={5} className="pr-0 codingAnimationLeft">
      <div className="p-3">
        <div className="fauxImages"></div>
      </div>
    </Col>
  );
}
