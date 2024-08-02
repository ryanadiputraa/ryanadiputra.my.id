import { FaDownload, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

import { Button } from "@/components/button";
import { GITHUB_URL, LINKEDIN_URL, X_URL } from "@/constants";

export default function Home(): React.ReactNode {
    return (
        <main>
            <section className="h-[85vh] flex flex-col justify-center gap-4 items-center">
                <h1 className="font-black text-4xl sm:text-6xl text-center">Hey, I&apos;m Ryan.</h1>
                <span className="text-gray-400 italic">Software Engineer</span>
                {/*<Button className="flex items-center gap-2">
                    Resume <FaDownload />
                </Button>
                */}
                <div className="flex gap-1">
                    <a target="_blank" href={GITHUB_URL}>
                        <FaGithub className="p-2 text-5xl" />
                    </a>
                    <a target="_blank" href={LINKEDIN_URL}>
                        <FaLinkedin className="p-2 text-5xl" />
                    </a>
                    <a target="_blank" href={X_URL}>
                        <FaXTwitter className="p-2 text-5xl" />
                    </a>
                </div>
            </section>
        </main>
    );
}
