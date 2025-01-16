"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FaBars, FaMoon, FaSun, FaX } from "react-icons/fa6"

import { Theme } from "@/types"
import { useTheme } from "@/hooks/useTheme"

import logo from "@/assets/svg/logo.svg"
import logoDarker from "@/assets/svg/logo-darker.svg"

interface Props {
  initialTheme: Theme
}

export function Header({ initialTheme }: Props) {
  const [isNavOpen, setIsNavOpen] = useState(true)
  const { theme, toggleTheme } = useTheme(initialTheme)
  const pathname = usePathname()

  const onOpenNav = () => setIsNavOpen(true)
  const onCloseNav = () => setIsNavOpen(false)

  return (
    <header className="sm:max-w-screen-xl sm:mx-auto flex items-center justify-between px-4 sm:px-20">
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
      <button className="inline-block sm:hidden" onClick={onOpenNav}>
        <FaBars className="size-8" />
      </button>
      <nav className={`z-50 fixed top-0 w-full h-full bg-slate-200 dark:bg-slate-950 flex justify-between items-start py-20 px-8 transition-all ${isNavOpen ? "right-0" : "-right-[100rem]"}`}>
        <button className="px-4" onClick={toggleTheme}>
          {theme === 'dark' ?
            <FaMoon className="size-8" />
            :
            <FaSun className="size-8" />
          }
        </button>
        <ul className="flex flex-col items-center gap-12">
          <li>
            <Link
              href="/"
              onClick={onCloseNav}
              className={`text-black dark:text-white font-semibold text-xl px-4 py-2 ${pathname === "/" ? "border-black dark:border-b-white border-b-2" : ""}`}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              onClick={onCloseNav}
              className={`text-black dark:text-white font-semibold text-xl px-4 py-2 ${pathname === "/about" ? "border-black dark:border-b-white border-b-2" : ""}`}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              onClick={onCloseNav}
              className={`text-black dark:text-white font-semibold text-xl px-4 py-2 ${pathname === "/projects" ? "border-black dark:border-b-white border-b-2" : ""}`}
            >
              PROJECTS
            </Link>
          </li>
        </ul>
        <button onClick={onCloseNav}><FaX className="size-8" /></button>
      </nav>
    </header>
  )

}
