import React from "react";

import { Container, Row, Col } from "react-bootstrap";

export function Work() {
  return (
    <section className="h-auto">
      <Container fluid="xl" className="container-xxl" id="work">
        <Row className="pt-130">
          <Col>
            <h2 className="display-4 text-uppercase font-weight-bold text-center">
              <span className="underline--magical">My Work.</span>
            </h2>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex flex-nowrap overflow-x-scroll">
            {/* <!-- This Site --> */}
            <div
              className="project my-3 mr-3 px-3"
              style={{
                background: "rgb(255,153,102)",
                background:
                  "-webkit-linear-gradient(120deg, #ff5e62 0%, #ff9966 100%)"
              }}
            >
              <Row className="h-100 overflow-hidden">
                <Col xs={12} className="position-relative">
                  {/* <img
                    alt="hyre"
                    class="position-absolute center w-100"
                    src="img/hyre.png"
                  /> */}
                  <Row>
                    <Col xs={12} className="project-content mt-5">
                      <h1 className="display-4 font-weight-bold text-uppercase mb-0">
                        This Site!
                      </h1>
                      <span className="badge badge-pill badge-primary border text-uppercase mb-1 mr-1">
                        Coding
                      </span>
                      <span className="badge badge-pill badge-primary border text-uppercase mb-1 mr-1">
                        UX/UI Design
                      </span>
                      <span className="badge badge-pill badge-primary border text-uppercase mb-1 mr-1">
                        Graphic Design
                      </span>
                      <p className="w-75 font-weight-bold">
                        This website was made from scratch as my own personal
                        React and GSAP project. This website was created using
                        Codesandbox, React, GSAP, Bootstrap and SASS.
                      </p>
                    </Col>
                    <Col
                      xs={12}
                      className="project-content position-absolute d-flex justify-content-center b-35"
                    >
                      <button
                        type="button"
                        className="btn btn-default text-uppercase font-weight-bold border"
                      >
                        View Project
                      </button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
            {/* <!-- Hyre --> */}
            <div
              className="project my-3 mr-3 px-3"
              style={{
                background: "rgb(0,167,164)",
                background:
                  "radial-gradient(circle, rgba(0,167,164,1) 30%, rgba(0,127,122,1) 100%)"
              }}
            >
              <Row className="h-100 overflow-hidden">
                <Col xs={12} className="position-relative">
                  {/* <img
                    alt="hyre"
                    class="position-absolute center w-100"
                    src="img/hyre.png"
                  /> */}
                  <Row>
                    <Col xs={12} className="project-content mt-5">
                      <h1 className="display-4 font-weight-bold text-uppercase mb-0">
                        Hyre
                      </h1>
                      <span className="badge badge-pill badge-primary border text-uppercase mb-1 mr-1">
                        Coding
                      </span>
                      <span className="badge badge-pill badge-primary border text-uppercase mb-1 mr-1">
                        UX/UI Design
                      </span>
                      <span className="badge badge-pill badge-primary border text-uppercase mb-1 mr-1">
                        Graphic Design
                      </span>
                      <p className="w-75 font-weight-bold">
                        Hyre is a web based two sided marketplace for
                        hotels/event organizers to post shifts and eligibible
                        hospitality staff to find shifts.
                      </p>
                    </Col>
                    <Col
                      xs={12}
                      className="project-content position-absolute d-flex justify-content-center b-35"
                    >
                      <button
                        type="button"
                        className="btn btn-default text-uppercase font-weight-bold border"
                      >
                        View Project
                      </button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
            {/* <!-- Nortrax --> */}
            <div
              className="project my-3 mr-3 px-3"
              style={{
                background: "rgb(254,190,16)",
                background:
                  "radial-gradient(circle, rgba(254,190,16,1) 30%, rgba(215,158,0,1) 100%)"
              }}
            >
              <Row className="h-100 overflow-hidden">
                <Col xs={12} className="position-relative">
                  {/* <img
                    alt="hyre"
                    class="position-absolute center w-100"
                    src="img/hyre.png"
                  /> */}
                  <Row>
                    <Col xs={12} className="project-content mt-5">
                      <h1 className="display-4 font-weight-bold text-uppercase mb-0">
                        Nortrax
                      </h1>
                      <span className="badge badge-pill badge-primary border text-uppercase mb-1 mr-1">
                        UX/UI Design
                      </span>
                      <span className="badge badge-pill badge-primary border text-uppercase mb-1 mr-1">
                        Graphic Design
                      </span>
                      <p className="w-75 font-weight-bold">
                        Hyre is a web based two sided marketplace for
                        hotels/event organizers to post shifts and eligibible
                        hospitality staff to find shifts.
                      </p>
                    </Col>
                    <Col
                      xs={12}
                      className="project-content position-absolute d-flex justify-content-center b-35"
                    >
                      <button
                        type="button"
                        className="btn btn-default text-uppercase font-weight-bold border"
                      >
                        View Project
                      </button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
            <div
              className="project my-3 mr-3 px-3"
              style={{
                background: "rgb(254,70,0)",
                background:
                  "radial-gradient(circle, rgba(254,70,0,1) 30%, rgba(198,50,15,1) 100%)"
              }}
            >
              <Row className="h-100 overflow-hidden">
                <Col xs={12} className="position-relative">
                  {/* <img
                    alt="hyre"
                    class="position-absolute center w-100"
                    src="img/hyre.png"
                  /> */}
                  <Row>
                    <Col xs={12} className="project-content mt-5">
                      <h1 className="display-4 font-weight-bold text-uppercase mb-0">
                        Brandt
                      </h1>
                      <span className="badge badge-pill badge-primary border text-uppercase mb-1 mr-1">
                        UX/UI Design
                      </span>
                      <span className="badge badge-pill badge-primary border text-uppercase mb-1 mr-1">
                        Graphic Design
                      </span>
                      <p className="w-75 font-weight-bold">
                        Hyre is a web based two sided marketplace for
                        hotels/event organizers to post shifts and eligibible
                        hospitality staff to find shifts.
                      </p>
                    </Col>
                    <Col
                      xs={12}
                      className="project-content position-absolute d-flex justify-content-center b-35"
                    >
                      <button
                        type="button"
                        className="btn btn-default text-uppercase font-weight-bold border"
                      >
                        View Project
                      </button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
