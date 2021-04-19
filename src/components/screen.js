import React, { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Row, Col } from "react-bootstrap";

export function Screen() {
  // const [screen, setScreen] = useState(".screen");
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".screen", {
      scrollTrigger: {
        trigger: ".screen",
        start: "top 130px",
        end: "+=1250",
        toggleActions: "play none none reverse"
      },
      duration: 1,
      boxShadow: "rgb(0 0 0/ 0%) 0px 0px 0px 0px"
    });

    gsap.to(".screen", {
      scrollTrigger: {
        trigger: ".screen",
        start: "top -250px",
        end: "+=1250",
        scrub: true
      },
      duration: 3,
      width: 280,
      height: 475,
      borderRadius: 30
    });

    gsap.to(".fauxHeader", {
      scrollTrigger: {
        trigger: ".screen",
        start: "top 130px",
        end: "+=1250",
        toggleActions: "play none none reverse"
      },
      duration: 1,
      marginTop: 0,
      ease: "bounce.out"
    });

    var animateIn = gsap.timeline({
      scrollTrigger: {
        trigger: ".screen",
        start: "top 130px",
        end: "+=1250",
        markers: true,
        toggleActions: "play none none reverse"
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
        ease: "bounce.out",
        delay: 1
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
      }
    );

    animateIn.fromTo(
      ".fauxTitle",
      {
        width: 0
      },
      {
        width: 150,
        duration: 1,
        ease: "bounce.out"
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
        <Col xs={12} md={5} className="pr-0 leftAnimation">
          <div className="p-3">
            <div className="fauxImages"></div>
          </div>
        </Col>
        <Col xs={12} md={7} className="pl-0 rightAnimation">
          <div className="p-3">
            <div className="fauxText fauxTitle"></div>
            <div className="fauxText fauxContent"></div>
            <div className="fauxText fauxContent"></div>
            <div className="fauxText fauxContent"></div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
