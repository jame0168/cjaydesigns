import React from "react";

import { Col, Row } from "react-bootstrap";

export function LoadingScreen() {
  return (
    <React.Fragment>
      <Row className="loader-container align-items-center">
        <Col>
          <div className="mx-auto d-block gif-wrap">
            <img src="/gif/loading.gif" className="w-100" />
          </div>
          <h2 className="my-4 gradient-text text-uppercase text-center font-weight-bold">
            Loading...
          </h2>
        </Col>
      </Row>
    </React.Fragment>
  );
}
