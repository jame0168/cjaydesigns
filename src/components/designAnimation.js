import React from "react";

export function DesignAnimation() {
  return (
    <div className="designAnimation">
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        transform="scale(1.15)"
      >
        <defs>
          <linearGradient
            id="gradientFill"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#ff9966" />
            <stop offset="50%" stopColor="#ff5e62" />
          </linearGradient>
        </defs>
        <path
          fill="url(#gradientFill)"
          d="M25.2,-31.4C34.8,-27.6,46.5,-23.2,53.2,-14.5C59.9,-5.7,61.6,7.4,61.1,23.2C60.5,38.9,57.7,57.2,47.2,64.2C36.6,71.1,18.3,66.7,0.6,65.8C-17,65,-34.1,67.7,-43.1,60.2C-52.2,52.8,-53.2,35.2,-59.2,18.7C-65.3,2.3,-76.3,-13.1,-76.9,-29.2C-77.5,-45.4,-67.7,-62.5,-53.1,-64.7C-38.5,-67,-19.3,-54.4,-5.8,-46.5C7.7,-38.5,15.5,-35.2,25.2,-31.4Z"
          transform="translate(100 100)"
        />
      </svg>
      <div
        class="position-absolute center"
        style={{ transform: "translate(-60%, -10%)" }}
      >
        <img alt="Tablet" src="img/clay_tablet.png" />
        <div
          className="position-absolute center w-100 h-100"
          style={{ perspective: 800 }}
        >
          <div className="fauxScreen position-absolute" />
          <div className="fauxScreen position-absolute" id="draw" />
        </div>
      </div>
    </div>
  );
}
