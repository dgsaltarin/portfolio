import ExperienceCard from "../common/Card";

const experiences = [
  {
    title: "Software Engineer",
    company: "TechCorp",
    date: "Jan 2023 - Present",
    description: [
      "Developed a scalable web application using React and Next.js.",
      "Integrated RESTful APIs with backend services in Go.",
      "Implemented CI/CD pipelines for faster deployments.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "StartupX",
    date: "May 2021 - Dec 2022",
    description: [
      "Designed and built an interactive UI using Tailwind CSS.",
      "Optimized website performance, improving load speed by 30%.",
      "Collaborated with backend developers to improve API integration.",
    ],
  },
];

function ExperienceSection() {
  return (
    <section id="experience" className="max-w-3xl mx-auto py-12 lg:py-24">
      <h2 className="text-3xl font-bold text-[#ccd6f6] mb-6">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;
