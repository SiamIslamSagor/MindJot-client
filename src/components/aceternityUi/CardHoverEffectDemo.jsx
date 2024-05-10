import { HoverEffect } from "../ui/card-hover-effect";
import {
  SiCss3,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
} from "react-icons/si";
import { FaGithub, FaHtml5, FaReact } from "react-icons/fa6";
// import { VscVscodeInsiders } from "react-icons/vsc";
import { TbBrandVscode } from "react-icons/tb";

export function CardHoverEffectDemo() {
  return (
    <div className="container mx-auto max-w-7xl px-8 overflow-hidden">
      <HoverEffect items={skills} />
    </div>
  );
}
const skills = [
  {
    title: "React",
    icon: FaReact,
    url: "https://legacy.reactjs.org/",
  },
  {
    title: "JavaScript",
    icon: SiJavascript,
    url: "https://www.javascript.com/",
  },
  {
    title: "Next.js",
    icon: SiNextdotjs,
    url: "https://cdn.ampproject.org/c/s/nextjs.org/?amp=1",
  },
  {
    title: "Tailwind CSS",
    icon: SiTailwindcss,
    url: "https://tailwindcss.com/docs/installation",
  },
  {
    title: "Node.js",
    icon: SiNodedotjs,
    url: "https://nodejs.org/en",
  },
  {
    title: "MongoDB",
    icon: SiMongodb,
    url: "https://www.mongodb.com/",
  },
  {
    title: "Express.js",
    icon: SiExpress,
    url: "https://expressjs.com/",
  },
  {
    title: "GitHub",
    icon: FaGithub,
    url: "https://github.com/Index",
  },
  {
    title: "HTML5",
    icon: FaHtml5,
    url: "https://www.w3schools.com/html/",
  },
  {
    title: "CSS3",
    icon: SiCss3,
    url: "https://www.w3schools.com/css/",
  },
  {
    title: "Firebase",
    icon: SiFirebase,
    url: "https://firebase.google.com/",
  },
  {
    title: "VSCode",
    icon: TbBrandVscode,
    url: "https://code.visualstudio.com/",
  },
];
