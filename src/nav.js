import React from "react";

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container, Nav, Navbar } from "react-bootstrap";

import { ParticleImg } from "./components/particleImage";

export function NavBar() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);

  return (
    <div className="NavBar">
      <Navbar expand="lg" fixed="top">
        <Container fluid="xl" className="container-xxl">
          <Navbar.Brand
            href="#home"
            className="overflow-hidden"
            style={{ fontSize: "30" }}
          >
            <ParticleImg />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Item className="px-3">
                <Nav.Link href="#skills">Skills</Nav.Link>
              </Nav.Item>
              <Nav.Item className="px-3">
                <Nav.Link href="#work">Work</Nav.Link>
              </Nav.Item>
              <Nav.Item className="px-3">
                <Nav.Link href="#about">About</Nav.Link>
              </Nav.Item>
              <Nav.Item className="px-3">
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
