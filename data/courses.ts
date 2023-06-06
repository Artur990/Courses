import { AiFillGithub } from "react-icons/ai";
import { GrReactjs } from "react-icons/gr";
import { TbBrandJavascript } from "react-icons/tb";
interface MenuItem {
  icon: string;
  title: string;
  link: string;
  description: string;
}

export const menuItems: MenuItem[] = [
  {
    icon: "Git",
    title: "GitHub",
    link: "github",
    description: "System control version",
  },
  {
    icon: "JS",
    title: "JavaScript",
    link: "javaScript",
    description: "Language programming",
  },
  {
    icon: "React",
    title: "React",
    link: "#",
    description: "Library for building user interfaces",
  },
];
