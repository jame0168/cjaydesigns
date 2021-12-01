import React from "react";

import { Col, Row } from "react-bootstrap";

export function LoadingScreen() {
  return (
    <React.Fragment>
      <Row
        className="loader-container align-items-center"
        style={{ height: "100vh" }}
      >
        <Col>
          <img src="/gif/loading.gif" className="mx-auto d-block" />
        </Col>
      </Row>
    </React.Fragment>
  );
}
