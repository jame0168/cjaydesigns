import React from "react";

import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export function Coding() {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={6}>
          <h2 className="text-uppercase font-weight-bold size-lg">Coding.</h2>
          <p className="size-sm">
            I have a fair knowledge of front-end coding. Specfically in HTML5,
            CSS3, SASS, jQuery and Bootstrap. I have some cursory knowledge in
            PHP, HAML, and Javascript but am always looking to improve my
            current skills and learn new coding languages. I have also used
            Github and BitBucket for repositories for version control.
          </p>
        </Col>
        <Col xs={12} sm={6}>
          2 of 2
        </Col>
      </Row>
    </Container>
  );
}
