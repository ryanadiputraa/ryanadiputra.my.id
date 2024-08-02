import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

import { experiences, GITHUB_URL, LINKEDIN_URL, projects, X_URL } from "@/constants";

import { Experience } from "./components/experience";
import { Project } from "./components/project";

export default function Home(): React.ReactNode {
    return (
        <main>
            <section className="h-[92vh] flex flex-col justify-center gap-4 items-center">
                <h1 className="font-black text-4xl sm:text-6xl text-center">Hey, I&apos;m Ryan.</h1>
                <span className="text-gray-400 italic">Software Engineer</span>
                <div className="flex gap-1">
                    <a target="_blank" href={GITHUB_URL}>
                        <FaGithub className="p-2 text-5xl" />
                    </a>
                    <a target="_blank" href={LINKEDIN_URL}>
                        <FaLinkedin className="p-2 text-5xl" />
                    </a>
                    <a target="_blank" href={X_URL}>
                        <FaXTwitter className="p-2 text-5xl" />
                    </a>
                </div>
            </section>
            <section className="bg-neutral-950 border-y-[1px] border-neutral-50 py-8 sm:py-16">
                <div className="max-w-5xl mx-auto px-3">
                    <h2 className="text-center font-semibold text-xl italic">Experiences</h2>
                    <div className="mt-16 flex flex-col gap-16">
                        {experiences.map((experience, i) => (
                            <Experience
                                key={experience.date}
                                experience={experience}
                                border={i !== experiences.length - 1}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-8 sm:py-16">
                <div className="max-w-5xl mx-auto px-3">
                    <h2 className="text-center font-semibold text-xl italic">Projects</h2>
                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16">
                        {Object.entries(projects).map(([slug, project]) => (
                            <Project key={project.name} project={project} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
