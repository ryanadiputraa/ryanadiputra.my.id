import Image from "next/image";
import Link from "next/link";
import {
    AiOutlineMail,
    AiOutlineGithub,
    AiOutlineLinkedin,
    AiOutlineInstagram
} from "react-icons/ai";

import { Button } from "@/components/button";
import { EMAIL, GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL } from "@/constants";

export default function Home() {
    return (
        <main className="flex flex-col gap-12 py-4">
            <section className="flex flex-col-reverse sm:flex-row justify-between items-center sm:items-start gap-4 sm:gap-0">
                <div className="text-center sm:text-left">
                    <h1 className="text-4xl font-bold">Ryan Adi Putra</h1>
                    <p>Software Engineer</p>
                </div>
                <Image
                    src="/assets/img/ryanadiputra.png"
                    alt="Ryan Adi Putra"
                    width={80}
                    height={80}
                    className="border-solid border-2 border-white rounded-full"
                />
            </section>
            <section className="flex flex-col items-start">
                <SubHeader text="Work" />
                <p className="indent-4 text-justify">
                    Software Engineer based in Indonesia, passionate about solving problems with
                    software solutions and continuously eager to learn new things. Enjoys exploring
                    new technologies and improving coding skills. When not online, loves to play
                    music 🎸.
                </p>
                <Link href={"/projects"} className="mt-4 self-center">
                    <Button>My Portfolio {">"}</Button>
                </Link>
            </section>
            <section className="flex flex-col items-start">
                <SubHeader text="Bio" />
                <Timeline year={2001}>Born in Palu 🔨, Indonesia.</Timeline>
                <Timeline year={2021}>
                    Joined Glints Academy's International Internship Kampus Merdeka program 🇮🇩.
                </Timeline>
                <Timeline year={2022}>
                    Joined Dicoding's Study Independence Kampus Merdeka program 🇮🇩.
                </Timeline>
                <Timeline year={2022}>
                    Work at Garena Indonesia as a Frontend Engineer intern 🧑🏻‍💻.
                </Timeline>
                <Timeline year={2023}>
                    Remote Frontend Engineer contract at Garena Indonesia 🧑🏻‍💻.
                </Timeline>
                <Timeline year={2024}>
                    Completed the Bachelor's degree in Computer Science at Tadulako University 🎓.
                </Timeline>
            </section>
            <section className="flex flex-col items-start">
                <SubHeader text="Socials" />
                <Social link={GITHUB_URL}>
                    <AiOutlineGithub />
                    @ryanadiputraa
                </Social>
                <Social link={LINKEDIN_URL}>
                    <AiOutlineLinkedin />
                    @ryanadiputraa
                </Social>
                <Social link={INSTAGRAM_URL}>
                    <AiOutlineInstagram />
                    @ryanadiputra_
                </Social>
                <a href={`mailto:${EMAIL}`} className="self-center">
                    <Button className="flex items-center gap-2 mt-4">
                        <AiOutlineMail />
                        Contact Me
                    </Button>
                </a>
            </section>
        </main>
    );
}

function SubHeader({ text }: { text: string }): React.ReactNode {
    return (
        <h4 className="text-lg font-semibold mb-2">
            {text}
            <div className="h-1 w-full bg-blue-400 rounded-md" />
        </h4>
    );
}

function Timeline({
    year,
    children
}: {
    year: number;
    children: React.ReactNode;
}): React.ReactNode {
    return (
        <div className="flex justify-between w-full">
            <span className="font-semibold flex-1">{year}</span>
            <p className="flex-[4] sm:flex-[10]">{children}</p>
        </div>
    );
}

function Social({ link, children }: { link: string; children: React.ReactNode }): React.ReactNode {
    return (
        <a
            href={link}
            target="_blank"
            className="flex items-center gap-2 py-2 px-4 rounded-md text-blue-400 font-semibold hover:bg-blue-200/75 dark:hover:bg-blue-800/75"
        >
            {children}
        </a>
    );
}
