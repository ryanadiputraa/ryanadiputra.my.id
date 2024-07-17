"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useLayoutEffect, useState } from "react";
import { AiOutlineGithub, AiOutlineMenu } from "react-icons/ai";

import { GITHUB_URL } from "@/constants";
import { ThemeSelector } from "./theme";

export function Header(): React.ReactNode {
    const [isOpenDropdown, setIsOpenDropdown] = useState(false);

    const handleResize = () => {
        if (window.innerWidth > 640) setIsOpenDropdown(false);
    };

    useLayoutEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header className="fixed top-0 left-0 sm:py-2 pr-3 w-full flex justify-center bg-neutral-200/30 dark:bg-neutral-800/30 backdrop-blur-md">
            <div className="flex justify-between items-center max-w-5xl w-full">
                <nav className="flex items-center">
                    <Link
                        href="/"
                        className="flex items-center h-full p-3 font-semibold mr-8 text-lg"
                        onClick={() => setIsOpenDropdown(false)}
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
                <div className="flex items-center gap-4">
                    <ThemeSelector />
                    <button
                        onClick={() => setIsOpenDropdown(prev => !prev)}
                        className="bg-blue-400 h-8 w-10 grid place-items-center rounded-md sm:hidden text-xl"
                    >
                        <AiOutlineMenu />
                    </button>
                    <DropdownMenu isOpen={isOpenDropdown} setIsOpen={setIsOpenDropdown} />
                </div>
            </div>
        </header>
    );
}

function NavLink({ href, text }: { href: string; text: string }): React.ReactNode {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`hidden sm:inline-block py-2 px-4 mx-2 rounded-md hover:underline underline-offset-4 ${isActive ? "bg-blue-400/75" : ""}`}
        >
            {text}
        </Link>
    );
}

function DropdownMenu({
    isOpen,
    setIsOpen
}: {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}): React.ReactNode {
    const pathname = usePathname();

    return (
        <div
            className={`${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"} font-semibold py-2 w-40 transition-all bg-neutral-50/90 dark:bg-neutral-900/90 rounded-md fixed top-16 right-3`}
        >
            <Link
                href={"/projects"}
                onClick={() => setIsOpen(false)}
                className={`${pathname === "/projects" ? "bg-blue-400/30" : ""} py-2 px-4 hover:bg-blue-400 inline-block w-full`}
            >
                Projects
            </Link>
            <Link
                href={"/posts"}
                onClick={() => setIsOpen(false)}
                className={`${pathname === "/posts" ? "bg-blue-400/30" : ""} py-2 px-4 hover:bg-blue-400 inline-block w-full`}
            >
                Posts
            </Link>
            <a
                href={GITHUB_URL}
                target="_blank"
                onClick={() => setIsOpen(false)}
                className="py-2 px-4 hover:undeline hover:bg-blue-400 w-full flex items-center gap-1"
            >
                <AiOutlineGithub />
                Github
            </a>
        </div>
    );
}
