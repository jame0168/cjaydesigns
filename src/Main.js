import React from "react";

import { Container } from "react-bootstrap";

import { Title } from "./title";
import { Coding } from "./coding";

export function Main() {
  return (
    <div className="Main">
      <div className="h-100">
        <Title />
        <Coding />
      </div>
    </div>
  );
}
