import React, { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { Row, Col } from "react-bootstrap";

export function CodeAM() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(TextPlugin);

  var dateObj = new Date();
  var month = dateObj.toLocaleString("default", { month: "long" });
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();

  let wineDate = month + " " + day + ", " + year;

  useEffect(() => {
    var animateIn = gsap.timeline({
      scrollTrigger: {
        trigger: ".codingAnimation",
        start: "top 130px",
        end: "+=1250",
        toggleActions: "play none none none"
      }
    });

    animateIn.from(".codeAM", {
      y: 50,
      opacity: 0,
      duration: 0.5,
      delay: 1.5,
      ease: "back.out(1)"
    });
  }, []);

  useEffect(() => {
    var animateScrub = gsap.timeline({
      scrollTrigger: {
        trigger: ".codingAnimation",
        start: "top -250px",
        end: "+=1250",
        scrub: true
      }
    });

    animateScrub.to("#fauxTitle", {
      opacity: 0,
      ease: "none"
    });

    animateScrub.to("#fauxTitle", {
      text: "Chardonnay"
    });

    animateScrub.to("#fauxTitle", {
      opacity: 1,
      ease: "none"
    });

    animateScrub.to(
      ".fauxSelect:nth-child(2), .fauxSelect:nth-child(3)",
      {
        duration: 1,
        flex: "0 0 0%",
        maxWidth: "0%",
        height: "0%",
        opacity: 0,
        ease: "linear"
      },
      "-=2"
    );

    animateScrub.to(
      ".fauxSelect:nth-child(2), .fauxSelect:nth-child(3)",
      {
        display: "none"
      },
      "-=2"
    );

    animateScrub.to(
      ".fauxSelect:first-child",
      {
        duration: 1,
        flex: "0 0 100%",
        maxWidth: "100%",
        ease: "linear"
      },
      "-=2"
    );

    animateScrub.to(
      ".fauxSelection",
      {
        height: 195,
        ease: "linear"
      },
      "-=1"
    );

    animateScrub.from(".fauxSelection p, .fauxSelection ul", {
      opacity: 0,
      duration: 0.5,
      ease: "linear"
    });
  }, []);

  return (
    <Col xs={12} className="codeAM">
      <div className="px-3">
        <h6 id="fauxTitle">New Arrivals</h6>
        <Row>
          <Col xs={4} className="fauxSelect">
            <div className="fauxSelection w-100 p-2">
              <div id="fauxStats">
                <p className="font-weight-bold mb-1">About</p>
                <p className="mb-2">
                  A very elegant, refined and detailed chardonnay that captures
                  County elegance then deftly layers in richness without tipping
                  the scales.
                </p>
                <ul className="p-0">
                  <li className="font-weight-bold">Release Date</li>
                  <li>{wineDate}</li>
                  <li className="font-weight-bold">Size</li>
                  <li>750 ml</li>
                  <li className="font-weight-bold">Alcohol/Vol</li>
                  <li>12.5%</li>
                  <li className="font-weight-bold">Made In</li>
                  <li>Ontario, Canada</li>
                  <li className="font-weight-bold">Made By</li>
                  <li>Hardie Wines</li>
                  <li className="font-weight-bold">Sugar Content</li>
                  <li>2 g/L</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xs={4} className="fauxSelect">
            <div className="fauxSelection w-100" />
          </Col>
          <Col xs={4} className="fauxSelect">
            <div className="fauxSelection w-100" />
          </Col>
        </Row>
      </div>
    </Col>
  );
}
