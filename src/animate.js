import React from "react";

import { Container, Row, Col } from "react-bootstrap";

export function Animate() {
  return (
    <Container fluid="xl" className="container-xxl section">
      <Row className="sticky">
        <Col xs={12} sm={6}>
          <h2 className="display-4 text-uppercase font-weight-bold">
            <span className="underline--magical">Animation.</span>
          </h2>
          <p>
            I love to design and draw. I have designed or helped design a few
            advertisements. Addtionally I also have done a fair it of UX/UI
            Design work. I have good knowledge of Illustrator and Photoshop, and
            have played around with InDesign as well. I generally to use
            InVision for UX/UI testing.
          </p>
          <Row>
            <Col xs={6}>
              <ul className="main-list">
                <li>
                  <i className="fab fa-html5"></i> <span>HTML / Haml</span>
                </li>
                <li>
                  <i className="fab fa-css3"></i> <span>CSS3</span>
                </li>
                <li>
                  <i className="fab fa-sass"></i> <span>SASS</span>
                </li>
              </ul>
            </Col>
            <Col xs={6}>
              <ul className="main-list">
                <li>
                  <i className="fab fa-bootstrap"></i> <span>Bootstrap</span>{" "}
                </li>
                <li>
                  <i className="fab fa-js"></i> <span>jQuery / Javascript</span>
                </li>
                <li>
                  <i className="fab fa-php"></i> <span>PHP</span>
                </li>
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
