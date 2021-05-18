import { CodeAnimation } from "../codeAnimation";
import { DesignAnimation } from "../designAnimation";
import { AnimateAnimation } from "../animateAnimation";

export const skills = [
  {
    section: "code",
    title: "Code.",
    description:
      "I have a strong knowledge of front-end coding languages, most listed below, and responsive design practices. I am always looking to improve my current skills and learn new coding languages. I have also used Github and BitBucket for repositories for version control.",
    primary: ["HTML / Haml", "CSS / Sass", "JS /jQuery"],
    primaryIcons: "ri-code-s-line",
    secondary: ["React", "GSAP", "Bootstrap"],
    secondaryIcons: "ri-code-s-line",
    tertiary: ["Github", "BitBucket", "Cloud9"],
    tertiaryIcons: "ri-git-branch-line",
    animation: <CodeAnimation />
  },
  {
    section: "design",
    title: "Design.",
    description:
      "I love to design and draw. I have designed or helped design a few advertisements. Addtionally I also have done a fair it of UX/UI Design work. I have good knowledge of Illustrator and Photoshop, and have played around with InDesign as well. I generally to use Adobe XD for UX/UI testing.",
    primary: ["Photoshop", "Illustrator", "InDesign"],
    primaryIcons: "ri-pencil-ruler-2-line",
    secondary: ["Adobe XD", "InVision"],
    secondaryIcons: "ri-device-line",
    tertiary: [],
    tertiaryIcons: "",
    animation: <DesignAnimation />
  },
  {
    section: "animate",
    title: "Animate.",
    description:
      "Animation is one of my favorite things to do. From short videos to even some of the gifs you see here. I have always found animation to be a labour of love. I tend to use After Effects 90% of the time but sometimes I have used Photoshop. I also have a fair understanding of Premiere for video editing.",
    primary: ["After Effects", "Photoshop"],
    primaryIcons: "ri-movie-2-line",
    secondary: ["Premiere Pro"],
    secondaryIcons: "ri-film-line",
    tertiary: [],
    tertiaryIcons: "",
    animation: <AnimateAnimation />
  }
];
