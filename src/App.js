import React from "react";

import { Container } from "react-bootstrap";

import { NavBar } from "./Nav";
import { Main } from "./Main";

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
        <Container fluid="xl" className="container-xxl">
          <Main />
        </Container>
      </Container>
      {/* <Container fluid="xl">
        <Footer />
      </Container> */}
    </div>
  );
}
