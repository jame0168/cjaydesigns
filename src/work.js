import React from "react";

import { Container, Row, Col } from "react-bootstrap";

export function Work() {
  return (
    <section>
      <Container fluid="xl" className="container-xxl section">
        <Row>
          <Col>
            <h2 className="display-4 text-uppercase font-weight-bold text-center">
              <span className="underline--magical">My Work.</span>
            </h2>
          </Col>
        </Row>
        <Row>
          <div className="project" id="website">
            <div></div>
            <h3 className="project-title">This Website!</h3>
            <p>
              This website was made from scrathchas my own personal react and
              GSAP project. This websitewas created using Codesandbox, React,
              GSAP, Bootstrap and SASS.
            </p>
          </div>
        </Row>
      </Container>
    </section>
  );
}
