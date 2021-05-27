export const works = [
  {
    title: "This Site!",
    description:
      "This website was made from scratch as my own personal React and GSAP project. This website was created using Codesandbox, React, GSAP, Bootstrap and SASS.",
    background: {
      background: "#FF5E62",
      background: "-webkit-linear-gradient(120deg, #ff5e62 0%, #ff9966 100%)"
    },
    categories: ["Coding", "UX/UI Design", "Graphic Design"],
    img: "",
    link: ""
  },
  {
    title: "Hyre",
    description:
      "Hyre is a web based two sided marketplace for hotels/event organizers to post shifts and eligibible hospitality staff to find shifts.",
    background: {
      background: "rgb(0,167,164)",
      background:
        "radial-gradient(circle, rgba(0,167,164,1) 30%, rgba(0,127,122,1) 100%)"
    },
    categories: ["Coding", "UX/UI Design", "Graphic Design"],
    img: (
      <img
        alt="Clay Cloche"
        className="position-absolute center w-100"
        src="img/clay_hyre.png"
        style={{ transform: "scale(2) translate(-15%, -11%)" }}
      />
    ),
    link: ""
  },
  {
    title: "Nortrax",
    description:
      "Nortrax is a heavy equipment supplier, focused mainly on the sale of John Deere construction and forestry equipment.",
    background: {
      background: "rgb(254,190,16)",
      background:
        "radial-gradient(circle, rgba(254,190,16,1) 30%, rgba(215,158,0,1) 100%)"
    },
    categories: ["Coding", "UX/UI Design", "Graphic Design"],
    img: (
      <img
        alt="Clay Skidsteer"
        className="position-absolute center w-100"
        src="img/clay_nortrax.png"
        style={{ transform: "scale(1.65) translate(-25%, -15%)" }}
      />
    ),
    link: ""
  },
  {
    title: "Brandt",
    description:
      "Brandt is a heavy equipment and technology dealer, that delivers a full range of equipment and support services across Canada.",
    background: {
      background: "rgb(254,70,0)",
      background:
        "radial-gradient(circle, rgba(254,70,0,1) 30%, rgba(198,50,15,1) 100%)"
    },
    categories: ["Coding", "UX/UI Design"],
    img: (
      <img
        alt="Clay Tractor"
        className="position-absolute center w-100"
        src="img/clay_brandt.png"
        style={{ transform: "scale(1.55) translate(-25%, -15%)" }}
      />
    ),
    link: ""
  }
];
