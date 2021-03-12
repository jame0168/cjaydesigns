import React from "react";

import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export function Design() {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={6}>
          <h2 className="display-4 text-uppercase font-weight-bold">
            <span className="underline--magical">Design.</span>
          </h2>
          <p>
            I love to design and draw. I have designed or helped design a few
            advertisements. Addtionally I also have done a fair it of UX/UI
            Design work. I have good knowledge of Illustrator and Photoshop, and
            have played around with InDesign as well. I generally to use
            InVision for UX/UI testing.
          </p>
        </Col>
        <Col xs={12} sm={6}>
          2 of 2
        </Col>
      </Row>
    </Container>
  );
}
