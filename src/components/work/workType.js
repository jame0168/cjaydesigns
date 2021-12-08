import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { works } from "./workItems";
import { projects } from "./projectItems";
import { WorkCard } from "./workCard";

export function WorkType(props) {
  if (props.work === "professional") {
    var content = works;
    var mainTitle = "My Work.";
  } else if (props.work === "personal") {
    var content = projects;
    var mainTitle = "My Projects.";
  }

  return (
    <section className="h-auto mb-5" id="work">
      <Container fluid="xl" className="container-xxl tile">
        <Row className="pt-130">
          <Col>
            <h2 className="display-4 text-uppercase font-weight-bold text-center">
              <span className="underline--magical">{mainTitle}</span>
            </h2>
          </Col>
        </Row>
        <WorkCard content={content} />
      </Container>
    </section>
  );
}
