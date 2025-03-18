"use client";
import AboutSection from "./components/sections/Hero";
import NavigationSection from "./components/sections/Navigation";
import SocialLinks from "./components/sections/SocialLinks";
import ExperienceSection from "./components/sections/Experience";
import ProjectsSection from "./components/sections/Projects";
import ResumeSection from "./components/sections/Resume";

export default function Home() {
  return (
    <>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 flex">
        {/* Two-column layout for large screens */}
        <div className="lg:flex lg:justify-between lg:items-start">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 xl:px-10">
            <div>
              <AboutSection />
              <NavigationSection />
            </div>
            <div>
              <SocialLinks />
            </div>
          </header>
          <main
            id="content"
            className="flex flex-col pt-6 lg:pt-24 lg:w-1/2 lg:py-16 gap-4"
          >
            <section id="resume">
              <ResumeSection />
            </section>
            <section id="experience">
              <ExperienceSection />
            </section>
            <section id="projects">
              <ProjectsSection />
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
