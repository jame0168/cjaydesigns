import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//import { Container, Row, Col } from "react-bootstrap";

export function Screen() {
  // const [screen, setScreen] = useState(".screen");
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".screen", {
      scrollTrigger: {
        trigger: ".screen",
        start: "top center",
        srub: true,
        markers: true
      },
      duration: 3,
      width: 280,
      height: 600,
      borderRadius: 30
    });
  }, []);

  return <div className="screen"></div>;
}
