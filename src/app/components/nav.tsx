import Link from "next/link";

export function Nav(): React.ReactNode {
    return (
        <nav className="hidden lg:inline-block mt-20">
            <ul className="flex flex-col gap-4">
                <li>
                    <Link href={"#about"} className="group flex items-center gap-4">
                        <div className="h-px w-10 group-hover:w-16 transition-all bg-neutral-400 group-hover:bg-neutral-50"></div>
                        <span className="group-hover:text-neutral-50 font-normal text-sm">
                            ABOUT
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href={"#experience"} className="group flex items-center gap-4">
                        <div className="h-px w-10 group-hover:w-16 transition-all bg-neutral-400 group-hover:bg-neutral-50"></div>
                        <span className="group-hover:text-neutral-50 font-normal text-sm">
                            EXPERIENCE
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href={"#projects"} className="group flex items-center gap-4">
                        <div className="h-px w-10 group-hover:w-16 transition-all bg-neutral-400 group-hover:bg-neutral-50"></div>
                        <span className="group-hover:text-neutral-50 font-normal text-sm">
                            PROJECTS
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
