import React from "react";

import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

export function NavBar() {
  return (
    <div className="NavBar">
      <Navbar expand="lg" fixed="top">
        <Container fluid="xl" className="container-xxl">
          <Navbar.Brand href="#home" style={{ fontSize: "30" }}>
            {/* <a className="special" href="#toTop">
              <i className="icon-logo-white"></i>
            </a> */}
            <img
              alt=""
              src="/cjaydesigns-grey-logo.png"
              width="60"
              height="60"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-center"
          >
            <Nav activeKey="/home">
              <Nav.Item className="px-5">
                <Nav.Link href="/home">Skills</Nav.Link>
              </Nav.Item>
              <Nav.Item className="px-5">
                <Nav.Link eventKey="link-1">Work</Nav.Link>
              </Nav.Item>
              <Nav.Item className="px-5">
                <Nav.Link eventKey="link-2">About</Nav.Link>
              </Nav.Item>
              <Nav.Item className="px-5">
                <Nav.Link eventKey="link-3">Contact</Nav.Link>
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
