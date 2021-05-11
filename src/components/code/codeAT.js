import React, { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function CodeAT() {
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

    animateScrub.to("#f0-1", {
      duration: 0.25,
      y: -50
    });

    animateScrub.to("#f0-2", {
      duration: 0.25,
      y: -50
    });

    animateScrub.to("#f0-3", {
      duration: 0.25,
      y: -50
    });

    animateScrub.to("#fF-1", {
      duration: 0.25,
      y: -50
    });

    animateScrub.to(
      "#fF-2",
      {
        duration: 0.25,
        rotateY: 90
      },
      "-=0.25"
    );

    animateScrub.fromTo(
      "#fF-3",
      {
        rotateY: -90
      },
      {
        duration: 0.25,
        rotateY: 0
      }
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

    // animateScrub.to(
    //   ".fauxUser",
    //   {
    //     duration: 2,
    //     x: -115,
    //     y: 105,
    //     scale: 4,
    //     ease: "power2.inOut"
    //   },
    //   "-=2"
    // );
  }, []);

  return (
    <div className="fauxHeader">
      <svg
        className="fauxLogo"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        id="layer"
        x="0px"
        y="0px"
        viewBox="0 0 500 500"
        style={{ enableBackground: "new 0 0 500 500" }}
        xmlSpace="preserve"
      >
        <defs>
          <linearGradient
            id="gradientFill"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#ff9966" />
            <stop offset="50%" stopColor="#ff5e62" />
          </linearGradient>
        </defs>
        <g fill="url(#gradientFill)">
          <path d="M546.7,221.9c-43.4,0-73.8,41.2-73.8,100.3c0,61,29,100.4,73.8,100.4c44.9,0,73.8-39.4,73.8-100.4   C620.5,263.2,590.2,221.9,546.7,221.9 M546.7,419.3c-34.2,0-43.2-50.9-43.2-97.1c0-46.1,10.7-96.9,43.2-96.9   c32.4,0,43.2,50.8,43.2,96.9C589.9,368.3,581,419.3,546.7,419.3" />
          <path d="M136.3,419.3v-3.4v-45.1h-3.4v3.4c0,21.9-15.8,41.7-50.4,41.7h-22V228.7h11v-3.4h-11H31.5h-11v3.4h11v187.1   h-11v3.4h11h28.9h72.4H136.3z" />
          <path d="M383.5,419.3c37.4,0,63.5-25.9,63.5-57.8c0-18.4-8.8-34.3-22.4-45.2c9.6-10.3,15.6-23.7,15.6-38.2   c0-29.2-23.7-52.8-58.2-52.8h-61.8h-11v3.4h11v187.1h-11v3.4h11L383.5,419.3z M349.2,228.7h23.5c23.5,0,42,23.5,42,52.5   c0,9.4-2,18.4-5.4,26.1c-8.2-3.4-17.2-5.3-26.6-5.3c-14.1,0-22.5,7.6-22.5,17c0,9.4,8.3,16.7,20.6,16.7c10.8,0,21.1-3,30.1-8.3   c4.5,8.5,7.2,19.1,7.2,31c0,31.8-19.7,57.6-45.4,57.6h-23.5V228.7z M403.6,317.1c-6.3,8.6-14.7,13.9-23.6,13.9   c-10,0-16.3-5.3-16.3-12.1c0-7.2,6.6-12.5,16.9-12.5C389.2,306.4,397.2,310.3,403.6,317.1" />
          <path d="M223.4,422.5c38.9,0,55.7-30,62.1-63.2l-3.4-0.6c-7.2,37.2-25.5,57.2-47.9,57.2c-29.1,0-52.7-42.7-52.7-95.3   c0-52.6,19.2-94.7,46.9-94.7c25.5,0,42.1,29.4,46.8,69.7h3.4v-70.3h-3.4v3.4c0,3.4-3,7.5-7.8,7.5c-3.3,0-6.7-1.4-12.8-5.1   c-9.5-5.9-20-9.2-31.2-9.2c-41,0-72.6,44.9-72.6,100.3C150.8,377.6,182.4,422.5,223.4,422.5" />
        </g>
      </svg>
      <div className="fauxOptions d-inline-block position-absolute text-uppercase">
        <span className="d-inline-block" id="f0-1">
          <span className="d-inline-block px-2 py-1">Home</span>
          <span className="activeOption d-inline-block position-absolute"></span>
        </span>
        <span className="d-inline-block px-2 py-1" id="f0-2">
          Drinks
        </span>
        <span className="d-inline-block px-2 py-1" id="f0-3">
          Gifts
        </span>
      </div>
      <div className="fauxOptions fauxFunctions d-flex position-absolute text-uppercase">
        <div
          className="fauxSearch d-flex align-items-center mr-2 px-2"
          id="fF-1"
        >
          <i className="ri-search-line mr-1" style={{ fontSize: 10 }}></i>
          <span
            className="d-inline-block text-uppercase"
            style={{ marginTop: 2 }}
          >
            Search
          </span>
        </div>
        <i className="ri-shopping-cart-line" id="fF-2"></i>
      </div>
      <div
        className="fauxOptions fauxFunctions d-flex position-absolute"
        id="fF-3"
      >
        <i className="ri-menu-2-line"></i>
      </div>
    </div>
  );
}
