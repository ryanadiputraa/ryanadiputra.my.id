"use client";

import { useRef } from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

import { EMAIL, GITHUB_URL, LINKEDIN_URL, START_YEAR, X_URL } from "@/constants";

import { About } from "./about";
import { Button } from "./components/button";
import { ExternalLink } from "./components/external-link";
import { Nav } from "./components/nav";

const now = new Date().getFullYear();
const exp = now - START_YEAR;

export default function Home(): React.ReactNode {
    const aboutRef = useRef(null);
    const experienceRef = useRef(null);
    const projectsRef = useRef(null);

    return (
        <div className="flex flex-col lg:flex-row lg:items-start gap-16 lg:gap-4 py-8 lg:py-0 px-6 min-h-screen">
            <header className="lg:h-screen lg:w-2/5 flex lg:sticky lg:top-0 flex-col justify-between lg:py-20">
                <div className="flex flex-col items-start">
                    <h1 className="text-neutral-50 font-bold text-4xl">Ryan Adi Putra</h1>
                    <p className="max-w-[24rem] mt-4">
                        Software Engineer based in Palu, Indonesia with {exp}+ years of experience.
                    </p>
                    <ExternalLink href={`mailto:${EMAIL}`} className="mt-4">
                        <Button>Contact Me</Button>
                    </ExternalLink>
                    <Nav
                        aboutRef={aboutRef}
                        experienceRef={experienceRef}
                        projectsRef={projectsRef}
                    />
                </div>
                <ul className="mt-8 lg:mt-0 flex gap-4">
                    <a href={GITHUB_URL} target="_blank" className="group">
                        <FaGithub className="text-3xl group-hover:text-neutral-50" />
                    </a>
                    <a href={LINKEDIN_URL} target="_blank" className="group">
                        <FaLinkedin className="text-3xl group-hover:text-neutral-50" />
                    </a>
                    <a href={X_URL} target="_blank" className="group">
                        <FaXTwitter className="text-3xl group-hover:text-neutral-50" />
                    </a>
                </ul>
            </header>
            <main className="lg:w-3/5">
                <About compRef={aboutRef} />
                <section
                    ref={experienceRef}
                    id="experience"
                    className="h-[150vh] mt-12 lg:mt-0 lg:pt-20"
                >
                    Experience
                </section>
                <section
                    ref={projectsRef}
                    id="projects"
                    className="h-[150vh] mt-12 lg:mt-0 lg:pt-20"
                >
                    Projects
                </section>
            </main>
        </div>
    );
}
