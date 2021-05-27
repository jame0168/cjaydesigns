import React from "react";

import { ParticleImg } from "./components/particleImage";

import { Container, Nav, Navbar } from "react-bootstrap";

export function NavBar() {
  return (
    <div className="NavBar">
      <Navbar expand="lg" fixed="top">
        <Container fluid="xl" className="container-xxl">
          <Navbar.Brand
            href="#home"
            className="overflow-hidden"
            style={{ fontSize: "30" }}
          >
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
            {/* 
              // Secondary Nav
              <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link>
              </Nav> 
            */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
