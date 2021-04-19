import React from "react";

import { Container, Row, Col } from "react-bootstrap";

export function Work() {
  return (
    <section>
      <Container fluid="xl" className="container-xxl section">
        <Row>
          <Col>
            <h2 className="display-4 text-uppercase font-weight-bold text-center">
              <span className="underline--magical">My Work.</span>
            </h2>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-between">
            {/* <!-- This Site --> */}
            <div className="project" id="website">
              <Row>
                <Col xs={12} className=" project-icon text-center">
                  <i className="fas fa-crown"></i>
                </Col>
                <Col xs={12}>
                  <h3 className="project-title">This Website!</h3>
                  <p>
                    This website was made from scratch as my own personal React
                    and GSAP project. This website was created using
                    Codesandbox, React, GSAP, Bootstrap and SASS.
                  </p>
                </Col>
              </Row>
            </div>
            {/* <!-- Hyre --> */}
            <div className="project" id="website">
              <Row>
                <Col xs={12} className=" project-icon text-center">
                  <i className="fas fa-crown"></i>
                </Col>
                <Col xs={12}>
                  <h3 className="project-title">Hyre</h3>
                  <p>
                    This website was made from scratch as my own personal React
                    and GSAP project. This website was created using
                    Codesandbox, React, GSAP, Bootstrap and SASS.
                  </p>
                </Col>
              </Row>
            </div>
            {/* <!-- Nortrax --> */}
            <div className="project" id="website">
              <Row>
                <Col xs={12} className=" project-icon text-center center-flex">
                  <i className="fas fa-crown"></i>
                </Col>
                <Col xs={12}>
                  <h3 className="project-title">Nortrax</h3>
                  <p>
                    This website was made from scratch as my own personal React
                    and GSAP project. This website was created using
                    Codesandbox, React, GSAP, Bootstrap and SASS.
                  </p>
                </Col>
              </Row>
            </div>
            <div className="project" id="website">
              <Row>
                <Col xs={12} className=" project-icon text-center">
                  <i className="fas fa-crown"></i>
                </Col>
                <Col xs={12}>
                  <h3 className="project-title">Nortrax</h3>
                  <p>
                    This website was made from scratch as my own personal React
                    and GSAP project. This website was created using
                    Codesandbox, React, GSAP, Bootstrap and SASS.
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
