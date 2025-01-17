import { experiences } from "@/constant";

import { AnimatedLink } from "../components/animated-link";
import { Footer } from "../components/footer";

export default function About() {
  return (
    <div>
      <h4 className="text-black dark:text-white font-black text-5xl">
        About Me.
      </h4>
      <ul className="relative mt-12 flex flex-col gap-12 before:content-[''] before:inline-block before:w-[0.1rem] before:h-[98%] sm:before:h-[96%] before:absolute before:top-3 before:left-[0.45rem] before:bg-slate-300 dark:before:bg-slate-700">
        {experiences.map((exp) => (
          <li
            key={exp.date}
            className="relative flex flex-col gap-4 before:content-[''] before:z-10 before:inline-block before:size-4 before:absolute before:top-[0.4rem] before:bg-white dark:before:bg-black before:border-2 before:border-slate-950 dark:before:border-slate-200 before:rounded-full"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2 sm:gap-0 pl-8">
              <div>
                <h6 className="text-black dark:text-white text-lg">
                  {exp.company}
                </h6>
                <span className="italic">{exp.role}</span>
              </div>
              <span className="italic text-black dark:text-white">
                {exp.date}
              </span>
            </div>
            <p className="pl-8">{exp.description}</p>
          </li>
        ))}
      </ul>
      <AnimatedLink
        label="See My Projects"
        href="/projects"
        className="mt-12"
      />
      <Footer className="mt-24" />
    </div>
  );
}
