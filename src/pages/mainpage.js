import React from "react";

import { Container } from "react-bootstrap";

import { Title } from "../components/title/title";
import { Skills } from "../components/skills/skills";
import { Work } from "../components/work/work";
import { About } from "../components/about/about";

export function MainPage() {
  return (
    <div className="MainPage">
      <div className="h-100">
        <Title />
        <Skills />
        <Work />
        <About />
      </div>
    </div>
  );
}
