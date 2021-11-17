import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import { abouts } from "./aboutItems";

export function AboutType() {
  return (
    <React.Fragment>
      <div className="about-container">
        <Row>
          {abouts.map(({ title, icon, groups }, index) => (
            <Col md={6} className="w-100 py-3 about-content secondary-color">
              <h4 className="text-left text-uppercase font-weight-bold align-bottom secondary-color p-2">
                <span
                  style={{
                    borderBottom: "2px solid #FFF",
                    padding: "0px 24px 4px 0px"
                  }}
                >
                  {icon} {title}
                </span>
              </h4>
              <ul className="mb-0 py-1 px-2">
                {groups.map((group, j) => (
                  <li class="mb-3">
                    <span className="secondary-font font-weight-bold">
                      {group.place}
                    </span>
                    <span className="secondary-font font-weight-bold float-right">
                      {group.year}
                    </span>
                    <br />
                    {group.action}
                  </li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>
      </div>
    </React.Fragment>
  );
}
