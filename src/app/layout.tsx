import { Manrope } from "next/font/google";

import { DEFAULT_THEME } from "@/constants";
import { type Theme } from "@/types";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { cookies } from "next/headers";

import "./globals.css";

const font = Manrope({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"]
});

export const metadata = {
    title: "Ryan Adi Putra",
    description: "Software Engineer portfolio website"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const cookieStore = cookies();
    const theme = cookieStore.get("theme");
    const initialTheme = (theme?.value as Theme) ?? DEFAULT_THEME;

    return (
        <html lang="en" className={initialTheme}>
            <body
                className={`${font.className} bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50 transition-colors font-thin`}
            >
                <Header initialTheme={initialTheme} />
                <div className="min-h-[95vh] pt-28 px-4 w-full max-w-3xl mx-auto">{children}</div>
                <Footer />
            </body>
        </html>
    );
}
