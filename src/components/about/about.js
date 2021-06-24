import React from "react";

import { Container, Row, Col } from "react-bootstrap";

export function About() {
  return (
    <section className="h-auto" id="about">
      <Container fluid="xl" className="container-xxl">
        <Row className="pt-5">
          <Col>
            <h2 className="display-4 text-uppercase font-weight-bold text-center">
              <span>About Me.</span>
            </h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
