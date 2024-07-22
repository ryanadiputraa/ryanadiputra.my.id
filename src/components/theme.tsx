"use client";

import { useState } from "react";
import { AiOutlineMoon, AiOutlineSun } from "react-icons/ai";

import { ONE_YEAR_IN_MILISECOND } from "@/constants";
import { setCookie } from "@/lib/storage";
import { type Theme } from "@/types";

export function ThemeSelector({ initialTheme }: { initialTheme: Theme }): React.ReactNode {
    const [theme, setTheme] = useState<Theme>(initialTheme);
    const cookieExpireDate = new Date();
    cookieExpireDate.setTime(cookieExpireDate.getTime() + ONE_YEAR_IN_MILISECOND);

    const toggleTheme = () => {
        const html = document.querySelector("html");
        const newVal = theme === "light" ? "dark" : "light";
        html?.classList.remove(theme);
        html?.classList.add(newVal);
        setTheme(newVal);
        setCookie("theme", newVal, cookieExpireDate);
    };

    return (
        <button
            onClick={toggleTheme}
            className="relative bg-amber-500 dark:bg-sky-600 rounded-full w-16 h-8"
        >
            <div className="absolute transition-all left-[0.15rem] dark:translate-x-8 top-[0.1rem] p-[0.4rem] bg-neutral-50 dark:bg-neutral-900 rounded-full text-base text-amber-500 dark:text-sky-600">
                {theme === "light" ? <AiOutlineSun /> : <AiOutlineMoon />}
            </div>
        </button>
    );
}
