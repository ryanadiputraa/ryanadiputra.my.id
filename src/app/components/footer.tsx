import { FaGithub, FaInstagram, FaLinkedin, FaX } from "react-icons/fa6";

import { GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL, X_URL } from "@/constant";

interface Props {
  className?: string;
}

export function Footer({ className = "" }: Props) {
  return (
    <footer className={`flex gap-8 ${className}`}>
      <a href={GITHUB_URL} target="_blank">
        <FaGithub className="size-6 hover:text-black dark:hover:text-white transition-colors" />
      </a>
      <a href={LINKEDIN_URL} target="_blank">
        <FaLinkedin className="size-6 hover:text-black dark:hover:text-white transition-colors" />
      </a>
      <a href={X_URL} target="_blank">
        <FaX className="size-6 hover:text-black dark:hover:text-white transition-colors" />
      </a>
      <a href={INSTAGRAM_URL} target="_blank">
        <FaInstagram className="size-6 hover:text-black dark:hover:text-white transition-colors" />
      </a>
    </footer>
  )
}
