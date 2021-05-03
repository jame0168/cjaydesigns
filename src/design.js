import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import { DesignAnimation } from "./components/designAnimation";

export function Design() {
  const designTools = ["Photoshop", "Illustrator", "InDesign"];
  const designItems = designTools.map((designTool) => (
    <li key={designTool}>
      <i className="ri-pencil-ruler-2-line"></i> <span> {designTool} </span>
    </li>
  ));

  const prototypeTools = ["Adobe XD", "InVision"];
  const prototypeItems = prototypeTools.map((prototypeTool) => (
    <li key={prototypeTool}>
      <i className="ri-device-line"></i> <span> {prototypeTool} </span>
    </li>
  ));

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
            <ul className="main-list">
              <Row>
                <Col xs={6} sm={4}>
                  {designItems}
                </Col>
                <Col xs={6} sm={4}>
                  {prototypeItems}
                </Col>
              </Row>
            </ul>
          </Col>
          <Col xs={12} sm={6} className="h-100">
            <DesignAnimation />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
