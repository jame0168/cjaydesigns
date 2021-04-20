import React from "react";

import ParticleImage, {
  ParticleOptions,
  Vector,
  forces,
  ParticleForce
} from "react-particle-image";
import { Container, Nav, Navbar } from "react-bootstrap";

const particleOptions: ParticleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 50;
  },
  color: ({ x, y, image }) => "#333333",
  radius: () => Math.random() * 1.5 + 0.5,
  mass: () => 50,
  friction: () => 0.15,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  }
};

const motionForce = (x: number, y: number): ParticleForce => {
  return forces.disturbance(x, y, 10);
};

export function NavBar() {
  return (
    <div className="NavBar">
      <Navbar expand="lg" fixed="top">
        <Container fluid="xl" className="container-xxl">
          <Navbar.Brand href="#home" style={{ fontSize: "30" }}>
            {/* <a className="special" href="#toTop">
              <i className="icon-logo-white"></i>
            </a> */}
            {/* <img
              alt=""
              src="/cjaydesigns-grey-logo.png"
              width="60"
              height="60"
              className="d-inline-block align-top"
            /> */}
            <ParticleImage
              src={"/img/cjaydesigns-grey-logo.png"}
              scale={0.75}
              entropy={20}
              maxParticles={3000}
              particleOptions={particleOptions}
              mouseMoveForce={motionForce}
              touchMoveForce={motionForce}
              backgroundColor="transparent"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav activeKey="/home">
              <Nav.Item className="px-3">
                <Nav.Link href="#skills">Skills</Nav.Link>
              </Nav.Item>
              <Nav.Item className="px-3">
                <Nav.Link eventKey="#work" href="#work">
                  Work
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="px-3">
                <Nav.Link eventKey="#about">About</Nav.Link>
              </Nav.Item>
              <Nav.Item className="px-3">
                <Nav.Link eventKey="#contact">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
            {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
