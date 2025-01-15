"use client"

import Image from "next/image"
import Link from "next/link"

import logo from "@/assets/svg/logo.svg"

export function Header() {
  return <header className="sm:max-w-screen-xl sm:mx-auto flex items-center justify-between px-4 sm:px-8">
    <Link href="/">
      <Image src={logo} alt="icon" height={60} />
    </Link>
    <ul className="hidden sm:flex items-center gap-4">
      <li className="cursor-pointer flex flex-col-reverse gap-2 items-center before:content-[''] before:inline-block before:w-0 before:hover:w-full before:h-[0.1rem] before:bg-slate-300 before:transition-all before:duration-300">
        <Link href="/about" className="px-4">About</Link>
      </li>
      <li className="cursor-pointer flex flex-col-reverse gap-2 items-center before:content-[''] before:inline-block before:w-0 before:hover:w-full before:h-[0.1rem] before:bg-slate-300 before:transition-all before:duration-300">
        <Link href="/projects" className="px-4">Projects</Link>
      </li>
    </ul>
    {/* TODO: mobile nav */}
  </header>
}
