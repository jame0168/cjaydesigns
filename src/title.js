import React from "react";

import { Container, Row, Col, Jumbotron } from "react-bootstrap";

export function Title() {
  return (
    <Jumbotron className="pt-0">
      <Container>
        <Row>
          <Col sm={12} md={6} className="title-container">
            <div className="center w-100">
              <h1 className="display-3 text-left text-uppercase font-weight-bold primary-font">
                <span style={{ fontSize: "10vw", lineHeight: "6vw" }}>
                  Chris
                </span>
                <br />
                <span style={{ fontSize: "9.2vw", lineHeight: "6vw" }}>
                  James
                </span>
              </h1>
              <h2
                className="text-uppercase"
                style={{ fontSize: "2.15vw", lineHeight: "1vw" }}
              >
                UX/UI and Graphic Design
              </h2>
            </div>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}
