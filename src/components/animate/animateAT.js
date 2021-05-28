import React, { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function AnimateAT() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    var animateIn = gsap.timeline({
      scrollTrigger: {
        trigger: ".animateAnimation",
        start: "top 130px",
        markers: true,
        toggleActions: "play none none none"
      }
    });

    animateIn.from(".faux--top", {
      y: "-100%",
      ease: "power2.out",
      delay: 0.5,
      duration: 0.5
    });
  }, []);

  return (
    <div className="fauxScreen faux--top bd-none border-top-0 border-left-0 border-right-0 w-100" />
  );
}
