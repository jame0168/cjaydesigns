import React, { useEffect } from "react";

export const abouts = [
  {
    title: "Education",
    icon: <i class="ri-book-mark-line secondary-color align-text-top" />,
    groups: [
      {
        place: "Algonquin College",
        action: "Interactive Multimedia Design"
      },
      {
        place: "Carleton University",
        action: (
          <React.Fragment>
            <span className="secondary-font">Bachelors of Commerce</span>
            <br />
            <span className="secondary-font">
              Marketing and Management of People and Organizations
            </span>
          </React.Fragment>
        )
      }
    ]
  },
  {
    title: "Work Experience",
    icon: <i class="ri-hammer-line secondary-color align-text-top" />,
    groups: [
      {
        place: "Hyre",
        year: "2016 - 2018",
        action: "UX/UI Designer"
      },
      {
        place: "Nortrax",
        year: "2018 - 2019",
        action: "Digital Marketing Specialist"
      },
      {
        place: "Brandt",
        year: "2019 - Present",
        action: "Digital Marketing Coordinator / UX/UI Designer"
      }
    ]
  }
];
