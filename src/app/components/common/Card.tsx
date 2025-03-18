import React from "react";

interface ExperienceCardProps {
  title: string;
  company: string;
  date: string;
  description: string[];
}

function ExperienceCard({
  title,
  company,
  date,
  description,
}: ExperienceCardProps) {
  return (
    <div className="group relative p-6 bg-[#112240] border border-[#233554] rounded-lg transition-transform transform hover:-translate-y-2 hover:shadow-lg">
      <h3 className="text-xl font-semibold text-[#ccd6f6]">
        {title} <span className="text-[#64ffda]">@ {company}</span>
      </h3>
      <p className="text-sm text-[#8892b0] mt-1">{date}</p>
      <ul className="mt-4 space-y-2 text-[#a8b2d1]">
        {description.map((point, index) => (
          <li key={index} className="flex items-start space-x-2">
            <span className="text-[#64ffda]">▹</span>
            <p>{point}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceCard;
