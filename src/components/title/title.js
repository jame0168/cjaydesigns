import React, { useEffect } from "react";

import { gsap } from "gsap";

import { Container, Row, Col, Jumbotron } from "react-bootstrap";

const words = [
  "UI Designer.",
  "UX Designer.",
  "Coder.",
  "Animator.",
  "Graphic Designer."
];

export function Title() {
  useEffect(() => {
    gsap.fromTo(
      ".fauxStation",
      { scale: 0.15, x: "-85%", y: "-20%", rotate: "-20deg" },
      {
        scale: 0.15,
        x: "-20%",
        y: "-85%",
        rotate: "20deg",
        duration: 15,
        yoyo: false,
        repeat: -1,
        ease: "power1.inOut"
      }
    );

    gsap.fromTo(
      ".fauxAstronaut",
      { scale: 1.25, x: "-30%", y: "-20%" },
      {
        scale: 1.25,
        x: "-30%",
        y: "-23%",
        duration: 5,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut"
      }
    );

    gsap.fromTo(
      "#fauxPhone",
      {
        x: "7%",
        y: "15%",
        rotate: 15
      },
      {
        x: "7%",
        y: "7%",
        rotate: -15,
        duration: 5,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut"
      }
    );
  }, []);

  useEffect(() => {
    let cursor = gsap.to(".cursor", {
      opacity: 0,
      ease: "power2.InOut",
      repeat: -1
    });

    let masterTL = gsap.timeline({ repeat: -1 });

    words.forEach((word) => {
      let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
      tl.to(".text", { duration: 1, text: word });
      masterTL.add(tl);
    });
  }, []);

  return (
    <React.Fragment>
      <Jumbotron className="py-0">
        <Container fluid="xl" className="container-xxl">
          <Row>
            <Col
              md={12}
              lg={{ span: 6, order: 2 }}
              className="title-container d-flex align-items-center"
            >
              <div className="mx-auto lava-lamp position-relative">
                <div className="lava clip-svg w-100 h-100">
                  <div className="stars"></div>
                  <img
                    alt="NASA Space Station"
                    src="img/clay-space-station.png"
                    className="position-absolute center-no-translate fauxStation"
                  />
                  <img
                    alt="Ark Academy Astronaut"
                    src="img/clay_astronaut.png"
                    className="position-absolute center-no-translate w-100 fauxAstronaut"
                  />
                </div>
                <img
                  alt="Ark Academy Astronaut"
                  src="img/clay_astronaut_overlay.png"
                  className="position-absolute center-no-translate w-100 fauxAstronaut"
                />
                <svg width="0" height="0">
                  <clipPath id="svgClip" clipPathUnits="objectBoundingBox">
                    <path d="M 0.6875 0.238281 C 0.761719 0.296875 0.851562 0.324219 0.886719 0.386719 C 0.925781 0.449219 0.910156 0.539062 0.878906 0.617188 C 0.84375 0.699219 0.796875 0.765625 0.730469 0.820312 C 0.664062 0.875 0.582031 0.914062 0.511719 0.898438 C 0.441406 0.882812 0.378906 0.816406 0.332031 0.753906 C 0.285156 0.695312 0.253906 0.644531 0.214844 0.582031 C 0.179688 0.519531 0.140625 0.445312 0.144531 0.367188 C 0.144531 0.289062 0.183594 0.203125 0.25 0.144531 C 0.316406 0.0859375 0.410156 0.046875 0.484375 0.0703125 C 0.558594 0.09375 0.613281 0.179688 0.6875 0.238281 Z M 0.6875 0.238281 " />
                  </clipPath>
                </svg>
                <img
                  alt="smartphone"
                  src="img/clay_phone.png"
                  className="position-absolute"
                  id="fauxPhone"
                />
              </div>
            </Col>
            <Col
              md={12}
              lg={{ span: 6, order: 1 }}
              className="title-container d-flex align-items-center"
            >
              <div className="w-100">
                <h3 className="font-weight-bold primary-font text-uppercase">
                  Hello, I'm
                </h3>
                <h1 className="text-uppercase font-weight-bold primary-font mb-0">
                  Chris James
                </h1>
                <h2 className="font-weight-bold primary-font text-uppercase text-nowrap">
                  <span class="text"></span>
                  <span class="cursor">_</span>
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </React.Fragment>
  );
}
