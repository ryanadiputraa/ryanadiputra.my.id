import Image from "next/image";
import { Fragment } from "react";

import { URL } from "@/components/url";
import { projects } from "@/constants/project";

export default function ProjectDetail({ params }: { params: { slug: string } }) {
    const project = projects[params.slug];

    if (!project) {
        return (
            <div className="min-h-[80vh] grid place-items-center">
                <p>Not Found</p>
            </div>
        );
    }
    return (
        <article className="flex flex-col gap-4">
            <Image
                src={project.image}
                alt={project.name}
                width={1440}
                height={720}
                className="w-full h-auto rounded-md"
            />
            <h4 className="text-xl font-semibold text-center">{project.name}</h4>
            <p className="text-justify indent-4">{project.description}</p>
            <div className="flex flex-col items-start gap-2">
                {project.url && (
                    <DetailItem title="LIVE">
                        <URL href={project.url}>{project.url} </URL>
                    </DetailItem>
                )}
                <DetailItem title="SOURCE">
                    <URL href={project.source}>Github</URL>
                </DetailItem>
                <DetailItem title="PLATFORM">{project.platform}</DetailItem>
                <DetailItem title="STACK">
                    {project.stack.map((tech, i) => (
                        <Fragment
                            key={tech}
                        >{`${tech}${i !== project.stack.length - 1 ? ", " : ""}`}</Fragment>
                    ))}
                </DetailItem>
            </div>
        </article>
    );
}

function DetailItem({
    title,
    children
}: {
    title: string;
    children: React.ReactNode;
}): React.ReactNode {
    return (
        <p>
            <span className="bg-teal-400/75 dark:bg-blue-700/75 text-neutral-900 dark:text-blue-300 py-[0.1rem] px-1 font-semibold mr-2">
                {title}
            </span>
            {children}
        </p>
    );
}
