import Image from "next/image";
import { FaArrowUp } from "react-icons/fa6";

import { type Project } from "@/types";
import { ExternalLink } from "./external-link";

export function Project({ project }: { project: Project }): React.ReactNode {
    const openLink = () => {
        if (window.innerWidth <= 1024) return;
        window.open(project.link);
    };

    return (
        <div
            onClick={openLink}
            className="group lg:cursor-pointer flex flex-col lg:flex-row gap-2 lg:gap-8 lg:hover:backdrop-blur-xl lg:hover:bg-primary/10 py-3 lg:px-4 rounded-sm"
        >
            <div className="flex-1 pt-1">
                <Image
                    src={project.image}
                    alt={project.name}
                    placeholder="blur"
                    className="w-full"
                />
            </div>
            <div className="flex-[3] flex flex-col gap-2">
                <ExternalLink
                    href={project.link}
                    className="lg:group-hover:text-primary transition-colors"
                >
                    <span>
                        {project.name}
                        <FaArrowUp className="ml-1 inline-block text-sm rotate-45 lg:group-hover:-translate-y-1 lg:group-hover:translate-x-1 transition-transform" />
                    </span>
                </ExternalLink>
                <p>{project.description}</p>
                <div className="mt-1 flex flex-wrap gap-2">
                    {project.skills.map(skill => (
                        <span
                            key={skill}
                            className="text-sm bg-primary/15 text-primary font-medium py-1 px-3 rounded-full"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
