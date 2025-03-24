import { JSXElementConstructor, ReactElement } from "react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export const socialLinks: {
  id: string;
  url: string;
  icon: ReactElement<any, string | JSXElementConstructor<any>>;
}[] = [
  {
    id: "Instagram",
    url: "https://www.instagram.com/dgsaltarin",
    icon: <FaInstagram size={25} color="#6A6A6A" />,
  },
  {
    id: "GitHub",
    url: "http://www.github.com/dgsaltarin",
    icon: <FaGithub size={25} color="#6A6A6A" />,
  },
  {
    id: "LinkedIn",
    url: "https://www.linkedin.com/in/dgsaltarin",
    icon: <FaLinkedinIn size={25} color="#6A6A6A" />,
  },
];
