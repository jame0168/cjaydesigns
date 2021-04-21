import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import { Screen } from "./components/screen";

export function Coding() {
  return (
    <section>
      <Container fluid="xl" className="container-xxl sections" id="skills">
        <Row className="sticky t-130">
          <Col md={12} lg={{ span: 5, offset: 1 }}>
            <div className="sections-content">
              <h2 className="display-4 text-uppercase font-weight-bold">
                <span className="underline--magical">Coding.</span>
              </h2>
              <p>
                {/* I have a strong knowledge of front-end coding. Specfically in HTML5, CSS3, SASS, React, jQuery and Bootstrap. I have some cursory knowledge in PHP, HAML, and Javascript but am always looking to improve my current skills and learn new coding languages. I have also used Github and BitBucket for repositories for version control. */}
                I have a strong knowledge of front-end coding languages, most
                listed below, and am always looking to improve my current skills
                and learn new coding languages. I have also used Github and
                BitBucket for repositories for version control.
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
                      <i className="fab fa-bootstrap"></i>{" "}
                      <span>Bootstrap</span>{" "}
                    </li>
                    <li>
                      <i className="fab fa-js"></i>{" "}
                      <span>jQuery / Javascript</span>
                    </li>
                    <li>
                      <i className="fab fa-php"></i> <span>PHP</span>
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
          </Col>
          <Col md={12} lg={6}>
            <Screen />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
