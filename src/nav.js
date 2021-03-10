import React from "react";

import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

export function NavBar() {
  return (
    <div className="test">
      <Navbar expand="lg">
        <Navbar.Brand href="#home" style={{ fontSize: "30" }}>
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          CJay Designs
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-center"
          style={{ marginLeft: "-150px" }}
        >
          <Nav activeKey="/home">
            <Nav.Item className="px-5">
              <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item className="px-5">
              <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item className="px-5">
              <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item className="px-5">
              <Nav.Link eventKey="disabled" disabled>
                Disabled
              </Nav.Link>
            </Nav.Item>
          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
