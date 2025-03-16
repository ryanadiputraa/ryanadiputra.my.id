import Image from "next/image";
import { AnimatedLink } from "../components/animated-link";
import { Footer } from "../components/footer";

import { projects } from "@/constant";

export default function Projects() {
  return (
    <div>
      <h4 className="text-black dark:text-white font-bold text-5xl">
        Projects.
      </h4>
      <div className="mt-12 columns-1 lg:columns-2 gap-8">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.github}
            target="_blank"
            className="group relative overflow-hidden"
          >
            <Image
              src={project.preview}
              alt={project.name}
              className="mb-8 rounded-lg"
            />
            <div className="lg:opacity-0 group-hover:opacity-100 transition-opacity w-full absolute bottom-0 flex flex-col gap-2 pt-20 px-4 pb-4 bg-gradient-to-b from-transparent to-black">
              <h6 className="text-2xl text-white font-semibold">
                {project.name}
              </h6>
              <p className="text-slate-400">{project.description}</p>
              <ul className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="text-xs bg-slate-500 text-white font-medium py-[0.15rem] px-2 rounded-full"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </a>
        ))}
      </div>
      <AnimatedLink label="Contact Me" href="/contact" className="mt-12" />
      <Footer className="mt-24" />
    </div>
  );
}
