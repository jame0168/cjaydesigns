import React, { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container, Row, Col } from "react-bootstrap";

import { skills } from "./skillItems";

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

  return (
    <React.Fragment>
      {skills.map(
        (
          {
            section,
            title,
            description,
            primary,
            primaryIcons,
            secondary,
            secondaryIcons,
            tertiary,
            tertiaryIcons,
            animation,
            order
          },
          index
        ) => (
          <section key={index} id={section}>
            <Container
              fluid="xl"
              className="container-xxl sections"
              id="skills"
            >
              <Row className="sticky d-flex align-items-center sections-content overflow-hidden">
                <Col md={12} lg={{ span: 6, order: order }}>
                  {animation}
                </Col>
                <Col md={12} lg={{ span: 5, offset: 1, order: 1 }}>
                  <h2 className="fade--in display-4 text-uppercase font-weight-bold">
                    <span className="underline--magical">{title}</span>
                  </h2>
                  <p className="fade--in">{description}</p>
                  <ul className="main-list mb-0">
                    <Row>
                      <Col xs={6} sm={4}>
                        {primary.map((firsts, j) => (
                          <li key={j}>
                            <i className={primaryIcons}></i>
                            <span> {firsts} </span>
                          </li>
                        ))}
                      </Col>
                      <Col xs={6} sm={4}>
                        {secondary.map((seconds, j) => (
                          <li key={j}>
                            <i className={secondaryIcons}></i>
                            <span> {seconds} </span>
                          </li>
                        ))}
                      </Col>
                      <Col xs={12} sm={4}>
                        <Row>
                          {tertiary.map((thirds, j) => (
                            <Col xs={6} sm={12} key={j}>
                              <li>
                                <i className={tertiaryIcons}></i>
                                <span> {thirds} </span>
                              </li>
                            </Col>
                          ))}
                        </Row>
                      </Col>
                    </Row>
                  </ul>
                </Col>
              </Row>
            </Container>
          </section>
        )
      )}
    </React.Fragment>
  );
}
