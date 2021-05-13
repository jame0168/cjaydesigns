import React from "react";
import { skills } from "./skillItems";

import { Container, Row, Col } from "react-bootstrap";
import { CodingAnimation } from "../codingAnimation";

export function Skills({ num }) {
  const skillSet = skills.map(() => skills[num]);
  const icons = skills.map((skill) => skill.primaryIcons);
  const tools = skills[num].primary;
  const toolSet = [];

  for (let i = 0; i < tools.length; i += 3) {
    toolSet.push(
      <Col xs={6} sm={4} key={tools}>
        {tools.slice(i, i + 3).map((tool, index) => (
          <li key={index}>
            <i className={icons}></i> <span> {tool} </span>
          </li>
        ))}
      </Col>
    );
  }

  console.log(num);

  return (
    <React.Fragment>
      {skillSet.map(
        ({ title, description, secondary, secondaryIcons }, index) => (
          <Container
            fluid="xl"
            className="container-xxl sections"
            id="skills"
            key={index}
          >
            <Row className="sticky d-flex align-items-center sections-content t-130">
              <Col md={12} lg={{ span: 5, offset: 1 }}>
                <h2 className="display-4 text-uppercase font-weight-bold">
                  <span className="underline--magical">{title}</span>
                </h2>
                <p>{description}</p>
                <ul className="main-list mb-0">
                  <Row>
                    {toolSet}
                    <Col xs={6} sm={4}>
                      {secondary.map((seconds, j) => (
                        <li key={j}>
                          <i className={secondaryIcons}></i>
                          <span> {seconds} </span>
                        </li>
                      ))}
                    </Col>
                  </Row>
                </ul>
              </Col>
              <Col md={12} lg={6}>
                <CodingAnimation />
              </Col>
            </Row>
          </Container>
        )
      )}
    </React.Fragment>
  );
}
