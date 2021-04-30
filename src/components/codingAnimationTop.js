import React, { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function CodingAnimationTop() {
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

    animateIn.to(
      ".fauxHeader",
      {
        duration: 1,
        marginTop: 0,
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

    animateScrub.to(
      ".fauxHeader",
      {
        duration: 2,
        height: "50%",
        ease: "power2.inOut"
      },
      "-=1.5"
    );

    animateScrub.to(
      ".fauxUser",
      {
        duration: 2,
        x: -115,
        y: 105,
        scale: 4,
        ease: "power2.inOut"
      },
      "-=2"
    );
  }, []);

  return (
    <div className="fauxHeader">
      <div
        className="fauxText fauxTitle"
        style={{ background: "rgba(255, 255, 255, 0.5)" }}
      ></div>
      <div className="fauxUser"></div>
    </div>
  );
}
