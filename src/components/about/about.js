import React from "react";

import { Container, Row, Col, Image, Button } from "react-bootstrap";

export function About() {
  return (
    <section className="h-auto" id="about">
      <Container fluid="xl" className="container-xxl pt-5">
        <Row>
          <Col xs={12} md={4}>
            <div className="p-4 rounded-circle">
              <Image
                className="w-100 text-center"
                src="https://s3.amazonaws.com/www-inside-design/uploads/2020/10/aspect-ratios-blogpost-1x1-1.png"
                roundedCircle
              />
            </div>
            <div />
          </Col>
          <Col xs={12} md={8}>
            <Row>
              <Col>
                <h2 className="display-4 text-uppercase text-center font-weight-bold secondary-color">
                  <span>Hi, I'm Chris James.</span>
                </h2>
                <p className="text-center secondary-color px-5 mb-0">
                  I am a designer and coder with over five year’s professional
                  experience, in addition to seven years of education in the
                  field of Marketing and Graphic Design. I love to create and I
                  am passionate about creative design and creating fun
                  experiences on the web for individuals. I enjoy a challenging
                  and fun work environment where one can achieve both as a team
                  and individually.
                </p>
                <Button
                  variant="primary"
                  className="mx-auto mt-4 mb-5 d-block text-uppercase font-weight-bold px-4"
                >
                  Download Resume
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <h5 class="text-center text-uppercase font-weight-bold secondary-color">
                  <i class="ri-book-mark-line secondary-color"></i> Education
                </h5>
                <Row>
                  <Col
                    class="mx-2 w-100 py-3"
                    style={{ borderTop: "2px solid #FFF" }}
                  >
                    <ul>
                      <li>Words</li>
                      <li>Words</li>
                      <li>Words</li>
                    </ul>
                  </Col>
                </Row>
              </Col>
              <Col>
                <h5 class="text-center text-uppercase font-weight-bold secondary-color">
                  <i class="ri-hammer-line secondary-color"></i> Work Experience
                </h5>
              </Col>
              <Col>
                <h5 class="text-center text-uppercase font-weight-bold secondary-color">
                  <i class="ri-medal-line secondary-color"></i> Accolades
                </h5>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
