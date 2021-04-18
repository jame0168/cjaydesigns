import React from "react";

import { Container } from "react-bootstrap";

import { Title } from "./title";
import { Coding } from "./coding";
import { Design } from "./design";
import { Animate } from "./animate";
import { Work } from "./work";

export function Main() {
  return (
    <div className="Main">
      <Container fluid="xl" className="container-xxl">
        <div className="h-100">
          <Title />
          <Coding />
          <Design />
          <Animate />
          <Work />
        </div>
      </Container>
    </div>
  );
}
