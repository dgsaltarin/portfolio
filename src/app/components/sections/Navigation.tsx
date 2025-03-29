"use client";
import useActiveSection from "@/app/hooks/useActiveSection";

const navItems = [
  { name: "Resume", href: "#resume" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
];

export default function Nav() {
  const activeSection = useActiveSection(["resume", "experience", "projects"]);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 flex flex-col lg:gap-4">
      <nav className="lg:flex hidden">
        <ul className="flex flex-col w-max text-start gap-3 uppercase text-xs font-medium transition-all duration-300">
          {navItems.map(({ name, href }) => {
            const isActive = activeSection === href.substring(1);

            return (
              <li key={name} className="group">
                <a
                  href={href}
                  className={`py-2 flex items-center gap-2 transition-all duration-200 ${
                    isActive
                      ? "scale-115 translate-x-8 text-blue-500 font-bold"
                      : "text-slate-500 group-hover:text-blue-500"
                  }`}
                >
                  <span
                    className={`nav-indicator h-px w-12 bg-slate-600 transition-all ${
                      isActive
                        ? "w-20 h-2 bg-blue-500"
                        : "bg-slate-600 group-hover:w-20 h-3 group-hover:bg-blue-500 group-hover:h-px"
                    }`}
                  />
                  {name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
