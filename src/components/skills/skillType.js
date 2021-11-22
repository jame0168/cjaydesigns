import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import { skills } from "./skillItems";

export function SkillType() {
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
