import React from "react";
import ParticleImage, {
  ParticleOptions,
  Vector,
  forces,
  ParticleForce
} from "react-particle-image";

import { Jumbotron } from "react-bootstrap";

const particleOptions: ParticleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 50;
  },
  color: ({ x, y, image }) => "#DDDDDD",
  radius: () => Math.random() * 1.5 + 0.5,
  mass: () => 40,
  friction: () => 0.15,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  }
};

const motionForce = (x: number, y: number): ParticleForce => {
  return forces.disturbance(x, y, 10);
};

export function Title() {
  return (
    <Jumbotron>
      <ParticleImage
        src={"/cjaydesigns-grey-logo.png"}
        scale={0.75}
        entropy={20}
        maxParticles={4000}
        particleOptions={particleOptions}
        mouseMoveForce={motionForce}
        touchMoveForce={motionForce}
        backgroundColor="#FFFFFF"
      />
      <div className="center w-100" style={{ top: "49%" }}>
        <h1 className="size-xl text-center text-uppercase font-weight-bold primary-font">
          ChristoPher James
        </h1>
        <h5 className="text-center text-uppercase">
          {" "}
          UX/UI and Graphic Design{" "}
        </h5>
      </div>
    </Jumbotron>
  );
}
