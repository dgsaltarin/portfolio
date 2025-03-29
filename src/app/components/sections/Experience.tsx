import ExperienceCard from "../common/Card";

const experiences = [
  {
    title: "Software Engineer",
    company: "Source Meridian",
    date: "September 2024 - Present",
    description: [
      "Developed and maintained scalable backend services using Go.",
      "Work with database schemas and queries to ensure high performance.",
      "Colaborate in the design and implemtation of new features.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "FARMU",
    date: "March 2022 - September 2024",
    description: [
      "Create serverless applications using AWS Lambda using Go.",
      "Design and Develop backend application with Go and Gin Framework.",
      "Create infrastructure solution using AWS services.",
      "Design and implement CI/CD workflows for the Software solution.",
    ],
  },
  {
    title: "Junior Software Engineer",
    company: "Zabud Technologies",
    date: "July 2020 - March 2022",
    description: [
      "Develop features using java with sprint boot.",
      "Deploy microservices into AWS Cloud.",
      "Write unit tests using Junit and Mockito",
      "Develop reactive forms and responsive web applications with Angular.",
    ],
  },
];

function Experience() {
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

export default Experience;
