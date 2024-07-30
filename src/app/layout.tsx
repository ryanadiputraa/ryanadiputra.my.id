import { Poppins } from "next/font/google";
import { cookies } from "next/headers";

import { DEFAULT_THEME } from "@/constants";
import { type Theme } from "@/types";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

import "./globals.css";

const font = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"]
});

export const metadata = {
    title: "Ryan Adi Putra",
    description: "Personal website, portfolio, project showcase, and tech posts."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const cookieStore = cookies();
    const theme = cookieStore.get("theme");
    const initialTheme = (theme?.value as Theme) ?? DEFAULT_THEME;

    return (
        <html lang="en" className={initialTheme}>
            <body
                className={`${font.className} bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 transition-colors`}
            >
                <Header initialTheme={initialTheme} />
                <div className="min-h-[94vh] pt-28 px-4 w-full max-w-3xl mx-auto">{children}</div>
                <Footer />
            </body>
        </html>
    );
}
