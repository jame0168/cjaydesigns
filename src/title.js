import React from "react";

import { Container, Row, Col, Jumbotron } from "react-bootstrap";

export function Title() {
  return (
    <div className="Title">
      <Jumbotron className="pt-0">
        <Container fluid="xl" className="container-xxl">
          <Row>
            <Col md={12} lg={6} className="title-container">
              <div className="center w-100">
                <h1 className="display-3 text-uppercase font-weight-bold primary-font mb-0">
                  <span className="title-first">Chris</span>
                  <br />
                  <span className="title-second">James</span>
                </h1>
                <h2 className="text-uppercase">
                  <span className="title-caption">
                    UX/UI and Graphic Design
                  </span>
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
}
