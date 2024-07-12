"use client";

import { useLayoutEffect, useState } from "react";
import { AiOutlineMoon, AiOutlineSun } from "react-icons/ai";

import { type Theme } from "@/types";
import { DEFAULT_THEME } from "@/constants";

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
            html?.classList.add(theme);
            setTheme(theme as Theme);
        }
    }, []);

    return (
        <button
            className="w-10 h-10 grid place-items-center hover:bg-neutral-300 dark:hover:bg-neutral-700 rounded-full text-xl 
      text-orange-500 dark:text-blue-300 border-solid border-2 border-neutral-300 dark:border-neutral-700 "
            onClick={toggleTheme}
        >
            {theme === "light" ? <AiOutlineSun /> : <AiOutlineMoon />}
        </button>
    );
}
