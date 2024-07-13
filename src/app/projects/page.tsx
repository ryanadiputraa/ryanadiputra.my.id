import Image from "next/image";

import { projects } from "@/constants/project";
import Link from "next/link";

export default function Projects() {
    return (
        <main className="grid grid-cols-2 gap-x-4 gap-y-12">
            {Object.entries(projects).map(([slug, project]) => (
                <Link
                    href={`/projects/${slug}`}
                    key={slug}
                    className="flex flex-col items-center text-center"
                >
                    <Image
                        src={project.image}
                        alt={project.name}
                        width={360}
                        height={140}
                        className="w-full h-auto rounded-xl"
                    />
                    <h4 className="text-xl font-semibold mt-2">{project.name}</h4>
                    <p>{project.shortDescription}</p>
                </Link>
            ))}
        </main>
    );
}
