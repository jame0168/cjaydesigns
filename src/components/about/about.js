import React from "react";

import { Container, Row, Col, Image, Button } from "react-bootstrap";

import { AboutType } from "./aboutType";

export function About() {
  return (
    <section className="h-auto" id="about">
      <Container fluid="xl" className="container-xxl pt-5 pb-4">
        <Row>
          <Col xs={12} lg={4} xl={5} className="d-flex align-items-center">
            <div className="p-4 rounded-circle">
              <Image
                className="w-100 text-center"
                src="https://s3.amazonaws.com/www-inside-design/uploads/2020/10/aspect-ratios-blogpost-1x1-1.png"
                roundedCircle
              />
            </div>
            <div />
          </Col>
          <Col xs={12} lg={8} xl={7}>
            <Row>
              <Col>
                <h2 className="display-4 text-uppercase text-center font-weight-bold secondary-color">
                  <span>Hi, I'm Chris James.</span>
                </h2>
                <p className="text-center secondary-color mb-0">
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
                  className="mx-auto my-4 d-block text-uppercase font-weight-bold px-4"
                >
                  Download Resume
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <AboutType />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      {/* <Container className="transition" /> */}
    </section>
  );
}
