import { Manrope } from "next/font/google";

import { DEFAULT_THEME } from "@/constants";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
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
    return (
        <html lang="en" className={DEFAULT_THEME}>
            <body
                className={`${font.className} bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50 transition-colors font-thin`}
            >
                <Header />
                <div className="min-h-[95vh] pt-28 px-4 w-full max-w-3xl mx-auto">{children}</div>
                <Footer />
            </body>
        </html>
    );
}
