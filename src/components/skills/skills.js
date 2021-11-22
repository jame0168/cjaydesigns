import React, { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { SkillType } from "./skillType";

export function Skills() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    var animateIn = gsap.timeline({
      scrollTrigger: {
        trigger: "#code",
        start: "top 130px",
        end: "+=1250",
        toggleActions: "play none none none"
      }
    });

    animateIn.from("#code .fade--in", {
      duration: 1,
      opacity: 0,
      ease: "linear"
    });

    animateIn.from(
      "#code .main-list li",
      {
        duration: 1,
        stagger: 0.15,
        opacity: 0,
        y: 50,
        ease: "back.out(1.7)"
      },
      "-=0.5"
    );
  }, []);

  useEffect(() => {
    var animateIn = gsap.timeline({
      scrollTrigger: {
        trigger: "#design",
        start: "top 130px",
        end: "+=1250",
        toggleActions: "play none none none"
      }
    });

    animateIn.from("#design .fade--in", {
      duration: 1,
      opacity: 0,
      ease: "linear"
    });

    animateIn.from(
      "#design .main-list li",
      {
        duration: 1,
        stagger: 0.15,
        opacity: 0,
        y: 50,
        ease: "back.out(1.7)"
      },
      "-=0.5"
    );
  }, []);

  useEffect(() => {
    var animateIn = gsap.timeline({
      scrollTrigger: {
        trigger: "#animate",
        start: "top 130px",
        end: "+=1250",
        toggleActions: "play none none none"
      }
    });

    animateIn.from("#animate .fade--in", {
      duration: 1,
      opacity: 0,
      ease: "linear"
    });

    animateIn.from(
      "#animate .main-list li",
      {
        duration: 1,
        stagger: 0.15,
        opacity: 0,
        y: 50,
        ease: "back.out(1.7)"
      },
      "-=0.5"
    );
  }, []);

  return <SkillType />;
}
