import React from "react";

import { Container } from "react-bootstrap";

import { Title } from "./title";
import { Skills } from "./components/skills/skills";
import { Work } from "./components/work/work";
import { About } from "./components/about/about";

export function Main() {
  return (
    <div className="Main">
      <div className="h-100">
        <Title />
        <Skills />
        <Work />
        <About />
      </div>
    </div>
  );
}
