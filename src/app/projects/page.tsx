import Image from "next/image";

import { projects } from "@/constants/project";
import Link from "next/link";

export const metadata = {
    title: "Projects | Ryan Adi Putra"
};

export default function Projects() {
    return (
        <main className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-12">
            {Object.entries(projects).map(([slug, project]) => (
                <Link
                    href={`/projects/${slug}`}
                    key={slug}
                    className="flex flex-col items-center text-center"
                >
                    <Image
                        src={project.image}
                        alt={project.name}
                        placeholder="blur"
                        className="w-full sm:w-auto h-auto sm:h-56 rounded-md"
                    />
                    <h4 className="text-xl font-semibold mt-2">{project.name}</h4>
                    <p>{project.shortDescription}</p>
                </Link>
            ))}
        </main>
    );
}
