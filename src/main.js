import React from "react";

import { Container } from "react-bootstrap";

import { Title } from "./title";
import { Skills } from "./components/skills/skills";
import { Work } from "./work";

export function Main() {
  return (
    <div className="Main">
      <Container fluid="xl" className="container-xxl">
        <div className="h-100">
          <Title />
          <Skills />
          <Work />
        </div>
      </Container>
    </div>
  );
}
