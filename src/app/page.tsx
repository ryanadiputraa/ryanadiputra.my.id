import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { Footer } from "./components/footer";


export default function Home() {
  return <div className="flex flex-col gap-8 leading-8">
    <h1 className="uppercase text-black dark:text-white font-bold text-4xl tracking-[0.3em]">I&apos;m Ryan Adi Putra</h1>
    <p>Software Engineer based in Palu, Indonesia. Passionate about solving problems with software solutions and eager to continuously learn new things. Enjoys exploring new technologies and improving coding skills.</p>
    <p>Outside working hours, I like to implement new technologies I’ve learned in my <Link href="/projects" className="text-black dark:text-white font-semibold">Side Projects</Link>. When AFK, I enjoy playing and listening to music.</p>
    <Link href="/about" className="self-start flex items-center gap-4 pr-8">See More About Me <FaArrowRight className="size-6 animate-move-right-return" /></Link>
    <Footer />
  </div>
}
