import React from "react";
import Image, { StaticImageData } from "next/image"; // only if you're using Next.js

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  imageSrc: StaticImageData; // local path e.g., /images/my-project.png
  link?: string;
};

export default function ProjectCard({
  title,
  description,
  technologies,
  imageSrc,
  link,
}: ProjectCardProps) {
  return (
    <div className="group relative rounded-xl border border-[var(--border-color)] bg-[var(--secondary-bg)] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary-color)] hover:shadow-lg">
      <div className="mb-4 overflow-hidden rounded-lg">
        <Image
          src={imageSrc}
          alt={title}
          width={177}
          height={99}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <h3 className="text-xl font-semibold text-[var(--text-light)]">
        {title}
      </h3>
      <p className="mt-2 text-sm text-[var(--text-dark)]">{description}</p>

      <ul className="mt-4 flex flex-wrap gap-2 text-xs text-[var(--text-muted)]">
        {technologies.map((tech) => (
          <li
            key={tech}
            className="px-2 py-1 bg-[var(--background-color)] rounded"
          >
            {tech}
          </li>
        ))}
      </ul>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0"
        />
      )}
    </div>
  );
}
