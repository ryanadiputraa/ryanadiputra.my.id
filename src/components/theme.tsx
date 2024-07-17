"use client";

import { useLayoutEffect, useState } from "react";
import { AiOutlineMoon, AiOutlineSun } from "react-icons/ai";

import { DEFAULT_THEME } from "@/constants";
import { type Theme } from "@/types";

export function ThemeSelector(): React.ReactNode {
    const [theme, setTheme] = useState<Theme>(DEFAULT_THEME);

    const toggleTheme = () => {
        const html = document.querySelector("html");
        const ls = window.localStorage;
        const newVal = theme === "light" ? "dark" : "light";

        html?.classList.remove(theme);
        html?.classList.add(newVal);
        setTheme(newVal);
        ls.setItem("theme", newVal);
    };

    useLayoutEffect(() => {
        const html = document.querySelector("html");
        const ls = window.localStorage;
        const theme = ls.getItem("theme");

        if (!theme) {
            ls.setItem("theme", DEFAULT_THEME);
            html?.classList.add(DEFAULT_THEME);
        } else {
            html?.classList.remove(theme === "dark" ? "light" : "dark");
            html?.classList.add(theme);
            setTheme(theme as Theme);
        }
    }, []);

    return (
        <button
            onClick={toggleTheme}
            className="relative bg-sky-900 dark:bg-amber-400 rounded-full w-16 sm:w-20 h-8 sm:h-10"
        >
            <div className="absolute transition-all left-[0.15rem] sm:left-1 dark:translate-x-8 dark:sm:translate-x-10 top-[0.1rem] sm:top-[0.2rem] p-[0.4rem] sm:p-2 bg-neutral-50 dark:bg-neutral-900 rounded-full text-base sm:text-lg text-skye-900 dark:text-amber-400">
                {theme === "dark" ? <AiOutlineSun /> : <AiOutlineMoon />}
            </div>
        </button>
    );
}
