import { MutableRefObject } from "react";

import { DICODING_URL, GARENA_URL, GLINTS_URL, KAMPUS_MERDEKA_URL } from "@/constants";

import { ExternalLink } from "./components/external-link";

export function About({
    compRef
}: {
    compRef: MutableRefObject<HTMLElement | null>;
}): React.ReactNode {
    return (
        <section ref={compRef} id="about" className="lg:pt-20 lg:px-4">
            <p>
                I&apos;m a software engineer with professional experience in web development at{" "}
                <ExternalLink href={GARENA_URL}>Garena Indonesia</ExternalLink>, working remotely
                with a cross-region team. I hold a degree in Computer Science and participated in
                the <ExternalLink href={KAMPUS_MERDEKA_URL}>Kampus Merdeka</ExternalLink> program
                during college, joining <ExternalLink href={DICODING_URL}>Dicoding</ExternalLink> as
                a Multi-Platform Developer student and{" "}
                <ExternalLink href={GLINTS_URL}>Glints Academy</ExternalLink> as an international
                internship student.
            </p>
            <p className="mt-4">
                Outside of my professional work, I engage in personal software projects aimed at
                helping people around me or solving my own challenges. These projects allow me to
                experiment with new technologies beyond my workspace. In my free time, I enjoy
                playing music and video games.
            </p>
        </section>
    );
}
