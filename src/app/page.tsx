"use client";

import { useRef } from "react";
import { FaArrowUp } from "react-icons/fa6";
import { About } from "./about";
import { Experience } from "./components/experience";
import { ExternalLink } from "./components/external-link";
import { Project } from "./components/project";
import { Header } from "./header";

import { experiences, projects } from "@/constants";

export default function Home(): React.ReactNode {
    const aboutRef = useRef<HTMLElement | null>(null);
    const experienceRef = useRef<HTMLElement | null>(null);
    const projectsRef = useRef<HTMLElement | null>(null);

    return (
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-0 lg:py-0 min-h-screen">
            <Header aboutRef={aboutRef} experienceRef={experienceRef} projectsRef={projectsRef} />
            <main className="flex-1">
                <div className="bg-layout bg-center bg-cover bg-no-repeat fixed right-0 top-0 h-screen w-full -z-10 "></div>
                <div className="bg-base/30 backdrop-blur-sm p-8 lg:px-20">
                    <div className="max-w-screen-xl mx-auto">
                        <About compRef={aboutRef} />
                        <section
                            ref={experienceRef}
                            id="experience"
                            className="mt-12 lg:mt-0 lg:pt-20"
                        >
                            <h4 className="sticky w-screen top-0 -translate-x-6 py-4 px-6 lg:hidden font-medium text-neutral-50 backdrop-blur-md">
                                Experience
                            </h4>
                            <div className="flex flex-col gap-8 mb-8">
                                {experiences.map(experience => (
                                    <Experience
                                        key={experience.from + experience.to}
                                        experience={experience}
                                    />
                                ))}
                            </div>
                            <ExternalLink href="/resume.pdf" target="_blank" className="group">
                                <span>
                                    View Full Resume{""}
                                    <FaArrowUp className="ml-1 inline-block text-sm rotate-45 lg:group-hover:-translate-y-1 lg:group-hover:translate-x-1 transition-transform" />
                                </span>
                            </ExternalLink>
                        </section>
                        <section
                            ref={projectsRef}
                            id="projects"
                            className="mt-12 lg:mt-10 lg:pt-20 lg:pb-20"
                        >
                            <h4 className="sticky w-screen top-0 -translate-x-6 py-4 px-6 lg:hidden font-medium text-neutral-50 backdrop-blur-md">
                                Projects
                            </h4>
                            <div className="flex flex-col gap-8">
                                {projects.map(project => (
                                    <Project key={project.name} project={project} />
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}
