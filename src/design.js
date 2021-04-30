import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import { DesignAnimation } from "./components/designAnimation";

export function Design() {
  return (
    <section>
      <Container fluid="xl" className="container-xxl sections">
        <Row className="sticky d-flex align-items-center sections-content t-130">
          <Col xs={12} sm={{ span: 5, offset: 1 }}>
            <h2 className="display-4 text-uppercase font-weight-bold">
              <span className="underline--magical">Design.</span>
            </h2>
            <p>
              I love to design and draw. I have designed or helped design a few
              advertisements. Addtionally I also have done a fair it of UX/UI
              Design work. I have good knowledge of Illustrator and Photoshop,
              and have played around with InDesign as well. I generally to use
              Adobe XD for UX/UI testing.
            </p>
            <Row>
              <Col xs={6}>
                <ul className="main-list">
                  <li>
                    <i className="ri-pencil-ruler-2-line"></i>{" "}
                    <span>Photoshop</span>
                  </li>
                  <li>
                    <i className="ri-pencil-ruler-2-line"></i>{" "}
                    <span>Illustrator</span>
                  </li>
                  <li>
                    <i className="ri-pencil-ruler-2-line"></i>{" "}
                    <span>InDesign</span>
                  </li>
                </ul>
              </Col>
              <Col xs={6}>
                <ul className="main-list">
                  <li>
                    <i className="ri-device-line"></i> <span>Adobe XD</span>
                  </li>
                  <li>
                    <i className="ri-device-line"></i> <span>InVision</span>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={6} className="h-100">
            <DesignAnimation />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
