import React, { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Row, Col } from "react-bootstrap";

export function Screen() {
  // const [screen, setScreen] = useState(".screen");
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    var animateIn = gsap.timeline({
      scrollTrigger: {
        trigger: ".screen",
        start: "top 130px",
        end: "+=1250",
        markers: true,
        toggleActions: "play none none none"
      }
    });

    animateIn.from(".screen", {
      duration: 1,
      boxShadow: "rgb(0 0 0/ 0%) 0px 0px 0px 0px"
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

    animateIn.fromTo(
      ".fauxImages",
      {
        scale: 0
      },
      {
        scale: 1,
        duration: 1,
        ease: "bounce.out"
      }
    );

    animateIn.fromTo(
      ".fauxContent",
      {
        width: "0%"
      },
      {
        width: "100%",
        duration: 1,
        ease: "bounce.out"
      },
      "-=1"
    );

    animateIn.fromTo(
      ".fauxTitle",
      {
        width: 0
      },
      {
        width: 134,
        duration: 1,
        ease: "bounce.out"
      }
    );
  }, []);

  useEffect(() => {
    var animateScrub = gsap.timeline({
      scrollTrigger: {
        trigger: ".screen",
        start: "top -250px",
        end: "+=1250",
        scrub: true
      }
    });

    animateScrub.to(".screen", {
      duration: 3,
      width: 280,
      height: 475,
      borderRadius: 30
    });

    animateScrub.to(".fauxHeader", {
      duration: 2,
      height: "50%",
      ease: "power2.inOut"
    });

    animateScrub.to(
      ".fauxUser",
      {
        duration: 2,
        x: -115,
        y: 105,
        scale: 4,
        ease: "power2.inOut"
      },
      "-=1"
    );

    animateScrub.to(
      ".leftAnimation",
      {
        duration: 2,
        maxWidth: 0,
        ease: "power2.inOut"
      },
      "-=2"
    );

    animateScrub.to(
      ".rightAnimation",
      {
        duration: 2,
        minWidth: "95%",
        ease: "power2.inOut"
      },
      "-=1"
    );

    animateScrub.fromTo(
      ".fauxIconContainer",
      {
        y: 60,
        opacity: 0
      },
      {
        y: -6,
        opacity: 1,
        ease: "power2.inOut"
      }
    );
  }, []);

  return (
    <div className="screen">
      <div className="fauxHeader">
        <div
          className="fauxText fauxTitle"
          style={{ background: "rgba(255, 255, 255, 0.5)" }}
        ></div>
        <div className="fauxUser">
          {/* <i className="far fa-user-circle"></i> */}
        </div>
      </div>
      <Row>
        <Col xs={5} className="pr-0 leftAnimation">
          <div className="p-3">
            <div className="fauxImages"></div>
          </div>
        </Col>
        <Col xs={7} className="pl-0 rightAnimation">
          <div className="p-3">
            <div className="fauxText fauxTitle"></div>
            <div className="fauxText fauxContent"></div>
            <div className="fauxText fauxContent"></div>
            <div className="fauxText fauxContent"></div>
            <div className="fauxText fauxContent"></div>
            <div className="fauxIconContainer p-2 w-100 d-flex justify-content-between">
              <div className="fauxIcons"></div>
              <div className="fauxIcons"></div>
              <div className="fauxIcons"></div>
              <div className="fauxIcons"></div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
