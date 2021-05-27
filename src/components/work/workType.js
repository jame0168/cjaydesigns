import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import { works } from "./workItems";

export function WorkType(props) {
  if (props.work === "professional") {
    var content = works;
    var mainTitle = "My Work.";
  }

  return (
    <section className="h-auto">
      <Container fluid="xl" className="container-xxl" id="work">
        <Row className="pt-130">
          <Col>
            <h2 className="display-4 text-uppercase font-weight-bold text-center">
              <span className="underline--magical">{mainTitle}</span>
            </h2>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex flex-nowrap overflow-x-scroll">
            {content.map(
              (
                { title, description, background, categories, img, link },
                index
              ) => (
                <div
                  key={index}
                  className="project my-3 mr-3 px-3"
                  style={background}
                >
                  <Row className="h-100 overflow-hidden">
                    <Col xs={12} className="position-relative">
                      {img}
                      <Row>
                        <Col xs={12} className="project-content mt-5">
                          <h1 className="display-4 font-weight-bold text-uppercase mb-0">
                            {title}
                          </h1>
                          {categories.map((category, j) => (
                            <span
                              key={j}
                              className="badge badge-pill badge-primary border text-uppercase mb-1 mr-1"
                            >
                              {category}
                            </span>
                          ))}
                          <p className="w-75 font-weight-bold">{description}</p>
                        </Col>
                        <Col
                          xs={12}
                          className="project-content position-absolute d-flex justify-content-center b-15"
                        >
                          <a
                            type="button"
                            className="btn btn-default text-uppercase font-weight-bold border fadeup"
                            href={link}
                          >
                            View Project
                          </a>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              )
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
