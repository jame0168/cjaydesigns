import React from "react";

import { NavBar } from "./Nav";
import { Main } from "./Main";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/app.scss";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      {/* <Footer /> */}
      {/* <Container fluid="xl">
        <Footer />
      </Container> */}
    </div>
  );
}
