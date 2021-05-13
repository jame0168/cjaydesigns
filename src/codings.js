import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import { CodingAnimation } from "./components/codingAnimation";

export function Coding() {
  const codeTools = [
    "HTML / Haml",
    "CSS / Sass",
    "JS /jQuery",
    "React",
    "GSAP",
    "Bootstrap"
  ];

  const codeItems = [];
  // for (let i = 0; i < codeTools.length; i += size)
  //   codeItems.push(codeTools.slice(i, i + size));

  for (let i = 0; i < codeTools.length; i += 3) {
    codeItems.push(
      <Col xs={6} sm={4} key={codeItems}>
        {codeTools.slice(i, i + 3).map((codeTool) => (
          <li key={codeTool}>
            <i className="ri-code-s-line"></i> <span> {codeTool} </span>
          </li>
        ))}
      </Col>
    );
  }

  // console.log(codeItems[0]);

  const branchTools = ["Github", "BitBucket", "Cloud9"];
  const branchItems = branchTools.map((branchTool) => (
    <li key={branchTool}>
      <i className="ri-git-branch-line"></i> <span> {branchTool} </span>
    </li>
  ));

  return (
    <section>
      <Container fluid="xl" className="container-xxl sections" id="skills">
        <Row className="sticky d-flex align-items-center sections-content t-130">
          <Col md={12} lg={{ span: 5, offset: 1 }}>
            <h2 className="display-4 text-uppercase font-weight-bold">
              <span className="underline--magical">Coding.</span>
            </h2>
            <p>
              {/* I have a strong knowledge of front-end coding. Specfically in HTML5, CSS3, SASS, React, jQuery and Bootstrap. I have some cursory knowledge in PHP, HAML, and Javascript but am always looking to improve my current skills and learn new coding languages. I have also used Github and BitBucket for repositories for version control. */}
              I have a strong knowledge of front-end coding languages, most
              listed below, and responsive design practices. I am always looking
              to improve my current skills and learn new coding languages. I
              have also used Github and BitBucket for repositories for version
              control.
            </p>
            <ul className="main-list mb-0">
              <Row>
                {codeItems}
                <Col xs={6} sm={4}>
                  {branchItems}
                </Col>
              </Row>
            </ul>
          </Col>
          <Col md={12} lg={6}>
            <CodingAnimation />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
