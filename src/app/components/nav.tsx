import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export function Nav(): React.ReactNode {
    const [hash, setHash] = useState("");
    const params = useParams();

    useEffect(() => {
        setHash(window.location.hash.substring(1));
    }, [params]);

    return (
        <nav className="hidden lg:inline-block mt-20">
            <ul className="flex flex-col gap-4">
                <li>
                    <Link href={"#about"} className="group flex items-center gap-4">
                        <div
                            className={`${hash === "about" ? "w-16" : "w-10"} h-px group-hover:w-16 transition-all bg-neutral-400 group-hover:bg-neutral-50`}
                        ></div>
                        <span
                            className={`${hash === "about" ? "text-neutral-50" : ""} group-hover:text-neutral-50 font-normal text-sm`}
                        >
                            ABOUT
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href={"#experience"} className="group flex items-center gap-4">
                        <div
                            className={`${hash === "experience" ? "w-16" : "w-10"} h-px group-hover:w-16 transition-all bg-neutral-400 group-hover:bg-neutral-50`}
                        ></div>
                        <span
                            className={`${hash === "experience" ? "text-neutral-50" : ""} group-hover:text-neutral-50 font-normal text-sm`}
                        >
                            EXPERIENCE
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href={"#projects"} className="group flex items-center gap-4">
                        <div
                            className={`${hash === "projects" ? "w-16" : "w-10"} h-px group-hover:w-16 transition-all bg-neutral-400 group-hover:bg-neutral-50`}
                        ></div>
                        <span
                            className={`${hash === "projects" ? "text-neutral-50" : ""} group-hover:text-neutral-50 font-normal text-sm`}
                        >
                            PROJECTS
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
