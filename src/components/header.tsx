import Image from "next/image";
import Link from "next/link";
import { AiOutlineGithub } from "react-icons/ai";

import { ThemeSelector } from "./theme";
import { GITHUB_URL } from "@/constants";

export function Header(): React.ReactNode {
    return (
        <header className="fixed top-0 left-0 py-2 pr-3 w-full flex justify-center backdrop-blur-sm">
            <div className="flex justify-between items-center max-w-5xl w-full">
                <nav className="flex items-center">
                    <Link
                        href="/"
                        className="flex items-center h-full p-3 font-semibold mr-12 text-lg"
                    >
                        <Image
                            src={"/assets/svg/logo.svg"}
                            alt="logo"
                            width={20}
                            height={20}
                            className="invert-0 dark:invert"
                        />
                        Ryan Adi Putra
                    </Link>
                    <NavLink href="/projects" text="Projects" />
                    <NavLink href="/posts" text="Posts" />
                    <a
                        href={GITHUB_URL}
                        target="_blank"
                        className="py-3 px-1 mx-2 hidden sm:flex items-center gap-1 hover:underline underline-offset-4"
                    >
                        <AiOutlineGithub className="" />
                        Github
                    </a>
                </nav>
                <ThemeSelector />
            </div>
        </header>
    );
}

function NavLink({ href, text }: { href: string; text: string }): React.ReactNode {
    return (
        <Link
            href={href}
            className="hidden sm:inline-block py-3 px-1 mx-4 hover:underline underline-offset-4"
        >
            {text}
        </Link>
    );
}
