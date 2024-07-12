import Image from "next/image";
import Link from "next/link";
import { AiOutlineGithub } from "react-icons/ai";

import { GITHUB_URL } from "@/constants";

export function Header(): React.ReactNode {
    return (
        <header className="fixed top-0 left-0 w-full flex justify-center bg-neutral-800/75 backdrop-blur-sm">
            <div className="flex justify-between max-w-5xl w-full">
                <nav className="flex items-center">
                    <Link href="/" className="flex items-center gap-1 h-full p-3 font-bold mr-8">
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
                        className="py-3 px-1 mx-2 hidden sm:flex items-center gap-1 hover:underline offset-4"
                    >
                        <AiOutlineGithub className="" />
                        Github
                    </a>
                </nav>
                {/* TODO: toggle theme button */}
                <button>Toggle</button>
            </div>
        </header>
    );
}

function NavLink({ href, text }: { href: string; text: string }): React.ReactNode {
    return (
        <Link
            href={href}
            className="hidden sm:inline-block py-3 px-1 mx-2 hover:underline underline-offset-4"
        >
            {text}
        </Link>
    );
}
