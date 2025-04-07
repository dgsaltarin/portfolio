import ProjectCard from "@/app/components/common/ProjectCard";
import PorfolioImage from "../../../../content/projects/project-1.png";

function Projects() {
  return (
    <ProjectCard
      title="Portfolio"
      description="A Personal website builded with Next.js and Tailwind CSS"
      technologies={["React", "Tailwind", "Typescript"]}
      imageSrc={PorfolioImage}
      link="https://danielsaltarin.com"
    />
  );
}

export default Projects;
