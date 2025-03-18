import { JSXElementConstructor, ReactElement } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const navItems: { name: string; href: string }[] = [
  { name: "about", href: "/#about" },
  { name: "experience", href: "/#experience" },
  { name: "projects", href: "/#projects" },
  { name: "blog", href: "/#blog" },
];

export const socialLinks: {
  id: string;
  url: string;
  icon: ReactElement<any, string | JSXElementConstructor<any>>;
}[] = [
  {
    id: "Twitter",
    url: "https://www.twitter.com/dgsaltarin",
    icon: <FaXTwitter size={25} color="#6A6A6A" />,
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
