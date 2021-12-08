import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

import { works } from "./workItems";
import { projects } from "./projectItems";

export function WorkCard(props) {
  if (props.content === works) {
    var content = works;
  } else if (props.content === projects) {
    var content = projects;
  }
  return (
    <Row>
      <Col className="project flex-nowrap overflow-auto">
        {content.map(
          (
            { title, description, background, categories, img, link },
            index
          ) => (
            <div
              key={index}
              className="project-container px-3"
              style={background}
            >
              <Row className="h-100 overflow-hidden">
                <Col xs={12} className="position-relative">
                  {img}
                  <Row>
                    <Col xs={0} lg={6} />
                    <Col xs={12} lg={6}>
                      <h1 className="display-4 font-weight-bold text-uppercase mb-0 gradient-text">
                        {title}
                      </h1>
                      <div className="project-content">
                        {categories.map((category, j) => (
                          <span
                            key={j}
                            className="badge badge-pill badge-primary border text-uppercase mb-1 mr-1"
                          >
                            {category}
                          </span>
                        ))}
                        <p className="font-weight-bold">{description}</p>
                      </div>
                    </Col>
                    <Col
                      xs={12}
                      className="project-content position-absolute d-flex justify-content-center b-15"
                    >
                      <Link
                        to="/work"
                        type="button"
                        className="btn btn-default text-uppercase font-weight-bold border fadeup"
                      >
                        View Project
                      </Link>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          )
        )}
      </Col>
    </Row>
  );
}
