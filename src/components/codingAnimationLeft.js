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

    animateIn.from(".fauxImageContent", {
      x: -30,
      opacity: 0,
      duration: 2,
      ease: "power3.out"
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

    animateScrub.to(".codingAnimationLeft", {
      duration: 2,
      maxWidth: 0,
      delay: 4,
      ease: "power2.inOut"
    });
  }, []);

  return (
    <Col xs={5} className="pr-0 codingAnimationLeft">
      <div className="p-3">
        <div className="fauxImages">
          <div className="fauxImageContent">
            <div className="fauxSun"></div>
            <div className="fauxMountains">
              <div className="fm fmLeft"></div>
              <div className="fm fmRight"></div>
            </div>
            <div
              className="fauxMountains"
              style={{
                right: "6px",
                top: "100px"
              }}
            >
              <div
                className="fm fmLeft"
                style={{
                  width: "90px",
                  transform: "translate(-14.25px, 8.7px) rotate(-45deg)"
                }}
              ></div>
              <div className="fm fmRight"></div>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
}
