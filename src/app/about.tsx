import { MutableRefObject } from "react";

import { EPILOG_URL, GARENA_URL, KAMPUS_MERDEKA_URL, RUMAH_URL, SOUNDSET_URL } from "@/constants";

import { ExternalLink } from "./components/external-link";

export function About({
    compRef
}: {
    compRef: MutableRefObject<HTMLElement | null>;
}): React.ReactNode {
    return (
        <section ref={compRef} id="about" className="lg:pt-20 lg:px-4">
            <p>
                My curiosity about software development began before college, which led me to pursue
                a computer science degree. During my college years, I participated in the{" "}
                <ExternalLink href={KAMPUS_MERDEKA_URL}>Kampus Merdeka</ExternalLink> program, which
                allowed me to gain valuable experience and deepen my interest in coding. When the
                COVID-19 pandemic started, I took the opportunity to pursue internships, which led
                me to join <ExternalLink href={GARENA_URL}>Garena Indonesia</ExternalLink>.
            </p>
            <p className="mt-4">
                These days, my main focus is on improving my coding skills, mastering software
                architecture, and doing projects outside work, primarily focused on software
                development tools.
            </p>
            <p className="mt-4">
                When AFK, I like to play guitar, listen to music, or hanging around and walk my dog.
                I also write music with my highschool band{" "}
                <ExternalLink href={SOUNDSET_URL}>Soundset</ExternalLink>. You can listen to our
                song <ExternalLink href={EPILOG_URL}>Epilog</ExternalLink> and{" "}
                <ExternalLink href={RUMAH_URL}>Rumah</ExternalLink>.
            </p>
        </section>
    );
}
