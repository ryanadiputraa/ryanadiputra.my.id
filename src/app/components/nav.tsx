import { useScroll } from "framer-motion";
import Link from "next/link";
import { MutableRefObject, useState } from "react";

interface Props {
    aboutRef: MutableRefObject<any>;
    experienceRef: MutableRefObject<any>;
    projectsRef: MutableRefObject<any>;
}

export function Nav({ aboutRef, experienceRef, projectsRef }: Props): React.ReactNode {
    const [active, setActive] = useState("about");
    const { scrollYProgress: aboutScroll } = useScroll({
        target: aboutRef,
        offset: ["start end", "end start"],
        layoutEffect: false
    });
    const { scrollYProgress: experienceScroll } = useScroll({
        target: experienceRef,
        offset: ["start end", "end start"],
        layoutEffect: false
    });
    const { scrollYProgress: projectsScroll } = useScroll({
        target: projectsRef,
        offset: ["start end", "end start"],
        layoutEffect: false
    });

    const updateNavState = (pos: number, nav: string) => {
        if (active === nav || pos < 0.4) return;
        setActive(nav);
    };

    aboutScroll.on("change", pos => updateNavState(pos, "about"));
    experienceScroll.on("change", pos => updateNavState(pos, "experience"));
    projectsScroll.on("change", pos => updateNavState(pos, "projects"));

    return (
        <nav className="hidden lg:inline-block mt-20">
            <ul className="flex flex-col gap-4">
                <li>
                    <Link href={"#about"} className="group flex items-center gap-4">
                        <div
                            className={`${active === "about" ? "w-16 bg-neutral-50" : "w-8"} h-px group-hover:w-16 transition-all bg-neutral-400 group-hover:bg-neutral-50`}
                        ></div>
                        <span
                            className={`${active === "about" ? "text-neutral-50" : ""} group-hover:text-neutral-50 font-normal text-sm`}
                        >
                            ABOUT
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href={"#experience"} className="group flex items-center gap-4">
                        <div
                            className={`${active === "experience" ? "w-16 bg-neutral-50" : "w-8"} h-px group-hover:w-16 transition-all bg-neutral-400 group-hover:bg-neutral-50`}
                        ></div>
                        <span
                            className={`${active === "experience" ? "text-neutral-50" : ""} group-hover:text-neutral-50 font-normal text-sm`}
                        >
                            EXPERIENCE
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href={"#projects"} className="group flex items-center gap-4">
                        <div
                            className={`${active === "projects" ? "w-16 bg-neutral-50" : "w-8"} h-px group-hover:w-16 transition-all bg-neutral-400 group-hover:bg-neutral-50`}
                        ></div>
                        <span
                            className={`${active === "projects" ? "text-neutral-50" : ""} group-hover:text-neutral-50 font-normal text-sm`}
                        >
                            PROJECTS
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
