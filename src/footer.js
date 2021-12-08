import React from "react";

import { Container, Row, Col } from "react-bootstrap";

export function Footer() {
  return (
    <footer>
      <Container
        fluid="xl"
        className="container-xxl sections h-100"
        id="skills"
      >
        <Row className="align-items-center h-100">
          <Col lg={8}>
            <h1 className="font-weight-bold text-uppercase">
              Let's make something fun together!
            </h1>
            <p className="mb-0">
              You can reach out to me through email at{" "}
              <a
                className="secondary-font font-weight-bold gradient-text"
                href="mailto:chrisjames20@gmail.com"
              >
                chrisjames20@gmail.com
              </a>
            </p>
            <p className="mb-0">
              Or you can reach out to me through:
              <span className="px-2">
                <a
                  href="https://www.linkedin.com/in/christopher-james-11173977/"
                  target="_blank"
                >
                  <i
                    style={{ fontSize: "32px", paddingBottom: "4px" }}
                    className="ri-linkedin-box-line align-middle"
                  ></i>
                </a>
              </span>
              <span>
                <a
                  href="https://www.facebook.com/christopher.james.712161"
                  target="_blank"
                >
                  <i
                    style={{ fontSize: "32px", paddingBottom: "4px" }}
                    className="ri-facebook-circle-line align-middle"
                  ></i>
                </a>
              </span>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
