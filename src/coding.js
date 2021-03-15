import React from "react";

import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export function Coding() {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={6}>
          <h2 className="display-4 text-uppercase font-weight-bold">
            <span className="underline-stroke">Coding.</span>
          </h2>
          <p>
            {/* I have a strong knowledge of front-end coding. Specfically in HTML5, CSS3, SASS, React, jQuery and Bootstrap. I have some cursory knowledge in PHP, HAML, and Javascript but am always looking to improve my current skills and learn new coding languages. I have also used Github and BitBucket for repositories for version control. */}
            I have a strong knowledge of front-end coding languages, most listed
            below, and am always looking to improve my current skills and learn
            new coding languages. I have also used Github and BitBucket for
            repositories for version control.
          </p>
          <Row>
            <Col xs={6}>
              <ul>
                <li>
                  <i className="fab fa-html5"></i>HTML
                </li>
                <li>
                  <i className="fab fa-html5"></i>CSS3
                </li>
                <li> SASS </li>
                <li> jQUERY</li>
              </ul>
            </Col>
            <Col xs={6}>
              <ul>
                <li> Bootstrap </li>
                <li> Haml </li>
                <li> PHP </li>
                <li> Javascript </li>
              </ul>
            </Col>
          </Row>
        </Col>
        <Col xs={12} sm={6}>
          2 of 2
        </Col>
      </Row>
    </Container>
  );
}
