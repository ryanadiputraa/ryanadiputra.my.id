import Image from "next/image";
import { Footer } from "../components/footer";

import { projects } from "@/constant";

export default function Projects() {
  return (
    <div>
      <h4 className="text-black dark:text-white font-black text-5xl">Projects.</h4>
      <div className="mt-12 columns-1 lg:columns-2 gap-8">
        {projects.map(project => (
          <div key={project.name} className="group relative overflow-hidden">
            <Image src={project.preview} alt={project.name} className="mb-8 rounded-lg" />
            <div className="lg:opacity-0 group-hover:opacity-100 transition-opacity w-full cursor-pointer absolute bottom-8 rounded-lg flex flex-col gap-2 pt-20 px-4 pb-4 bg-gradient-to-b from-transparent to-black">
              <h6 className="text-2xl text-white font-semibold">{project.name}</h6>
              <p className="text-slate-400">{project.description}</p>
              <ul className="flex gap-2">
                {project.tech.map(tech => <li key={tech} className="text-xs bg-slate-500 text-white font-medium py-[0.15rem] px-2 rounded-full">{tech}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <Footer className="mt-24" />
    </div>
  )
}
