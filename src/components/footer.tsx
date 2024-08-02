import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

import { GITHUB_URL, LINKEDIN_URL, X_URL } from "@/constants";

export function Footer(): React.ReactNode {
    const now = new Date().getFullYear();
    return (
        <footer className="py-4 px-3 sm:px-6 flex justify-between items-center text-sm">
            <p className="text-gray-400">Ryan Adi Putra © {now}.</p>
            <div className="flex gap-3">
                <a target="_blank" href={GITHUB_URL}>
                    <FaGithub className="text-2xl" />
                </a>
                <a target="_blank" href={LINKEDIN_URL}>
                    <FaLinkedin className="text-2xl" />
                </a>
                <a target="_blank" href={X_URL}>
                    <FaXTwitter className="text-2xl" />
                </a>
            </div>
        </footer>
    );
}
