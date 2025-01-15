import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaX } from "react-icons/fa6";

import { GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL, X_URL } from "@/constant";

export default function Home() {
  return <div className="flex flex-col gap-8 leading-8">
    <h1 className="uppercase text-black dark:text-white font-bold text-4xl tracking-[0.3em]">I&apos;m Ryan Adi Putra</h1>
    <p>Software Engineer based in Palu, Indonesia. Passionate about solving problems with software solutions and eager to continuously learn new things. Enjoys exploring new technologies and improving coding skills.</p>
    <p>Outside working hours, I like to implement new technologies I’ve learned in my <Link href="/projects" className="text-black dark:text-white font-semibold">Side Projects</Link>. When AFK, I enjoy playing and listening to music.</p>
    <div className="flex gap-4">
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
    </div>
  </div>
}
