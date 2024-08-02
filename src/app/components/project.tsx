import Image from "next/image";

import { type Project } from "@/types";

interface Props {
    project: Project;
}

export function Project({ project }: Props): React.ReactNode {
    return (
        <a target="_blank" href={project.url} className="flex flex-col rounded-md overflow-hidden">
            <Image
                src={project.image}
                alt={project.name}
                placeholder="blur"
                className="h:auto h-64 w-full sm:w-auto rounded-t-md"
            />
            <div className="py-2 px-4 flex-grow flex flex-col gap-3 border-gray-700 border-[1px] border-t-0 rounded-b-md">
                <h4 className="text-xl font-semibold">{project.name}</h4>
                <p className="text-gray-400 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                    {project.stack.map(stack => (
                        <span
                            key={stack}
                            className="text-xs bg-neutral-800 py-1 px-3 rounded-full border-[1px] border-gray-700"
                        >
                            {stack}
                        </span>
                    ))}
                </div>
            </div>
        </a>
    );
}
