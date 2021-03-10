import React from "react";

import { NavBar } from "./nav";
import { Main } from "./main";

import "../styles/styles.scss";
import "../styles/app.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
    </div>
  );
}
