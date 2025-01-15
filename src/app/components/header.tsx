"use client"

import Image from "next/image"
import Link from "next/link"
import { FaBars, FaMoon, FaSun } from "react-icons/fa6"

import { Theme } from "@/types"

import logo from "@/assets/svg/logo.svg"
import logoDarker from "@/assets/svg/logo-darker.svg"
import { useTheme } from "@/hooks/useTheme"

interface Props {
  initialTheme: Theme
}

export function Header({ initialTheme }: Props) {
  const { theme, toggleTheme } = useTheme(initialTheme)

  return <header className="sm:max-w-screen-xl sm:mx-auto flex items-center justify-between px-4 sm:px-20">
    <Link href="/">
      <Image src={theme === "dark" ? logo : logoDarker} alt="icon" height={60} />
    </Link>
    <ul className="hidden sm:flex items-center gap-4">
      <li className="cursor-pointer flex flex-col-reverse gap-2 items-center before:content-[''] before:inline-block before:w-0 before:hover:w-full before:h-[0.1rem] before:bg-slate-800 dark:before:bg-slate-400 before:transition-all">
        <Link href="/about" className="px-4">About</Link>
      </li>
      <li className="cursor-pointer flex flex-col-reverse gap-2 items-center before:content-[''] before:inline-block before:w-0 before:hover:w-full before:h-[0.1rem] before:bg-slate-800 dark:before:bg-slate-400 before:transition-all">
        <Link href="/projects" className="px-4">Projects</Link>
      </li>
      <li>
        <button className="px-4" onClick={toggleTheme}>
          {theme === 'dark' ?
            <FaMoon className="size-6" />
            :
            <FaSun className="size-6" />
          }
        </button>
      </li>
    </ul>
    {/* TODO: mobile nav */}
    <button className="inline-block sm:hidden">
      <FaBars className="size-8" />
    </button>
  </header>

}
