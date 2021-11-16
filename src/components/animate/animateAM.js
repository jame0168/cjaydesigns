import React, { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function AnimateAM() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    var animateIn = gsap.timeline({
      scrollTrigger: {
        trigger: ".animateAnimation",
        start: "top 130px",
        toggleActions: "play none none none"
      }
    });

    animateIn.from(".faux--center", {
      scale: 0,
      ease: "back.out",
      duration: 0.5,
      delay: 0.5
    });
  }, []);

  useEffect(() => {
    var animateIn = gsap.timeline({
      scrollTrigger: {
        trigger: ".animateAnimation",
        start: "top 130px",
        toggleActions: "play none none reset"
      }
    });

    animateIn.to(".faux--scrub", {
      right: 0,
      duration: 4,
      delay: 1,
      ease: "linear"
    });

    animateIn.to(
      "#faux--ball",
      {
        opacity: 1,
        y: 68,
        duration: 1,
        delay: 1,
        ease: "bounce.out"
      },
      "-=5"
    );

    animateIn.to(
      "#faux--ball",
      {
        x: 165,
        duration: 2,
        ease: "power1.inOut"
      },
      "-=3"
    );

    animateIn.to(
      "#faux--ball",
      {
        y: 93,
        duration: 0.33,
        ease: "bounce.out"
      },
      "-=1"
    );

    animateIn.to(
      "#faux--ball",
      {
        x: 325,
        duration: 1.1,
        ease: "power1.out"
      },
      "-=1"
    );
  }, []);

  return (
    <div className="faux--screen faux--center position-relative bd-none mx-auto mt-1 mb-4 w-75">
      <img
        alt="ball"
        src="img/clay_ball.png"
        className="h-25"
        id="faux--ball"
      />
      <div className="faux--floor-wrap d-flex position-absolute w-100 b-0 l-0">
        <div className="faux--floor h-100" />
        <div className="faux--floor h-100 mt-4" />
      </div>
    </div>
  );
}
