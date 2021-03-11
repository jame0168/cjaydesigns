import React from "react";

import { Container } from "react-bootstrap";

import { NavBar } from "./nav";
import { Main } from "./main";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.scss";
import "../styles/app.scss";

export default function App() {
  return (
    <div className="App">
      <Container fluid>
        <Container fluid="xl">
          <NavBar />
        </Container>
        <Container fluid="xl" className="container-xxl title-container">
          <Main />
        </Container>
      </Container>
    </div>
  );
}
