import { Manrope } from "next/font/google";

import { DEFAULT_THEME } from "@/constants";

import { Header } from "@/components/header";
import "./globals.css";

const font = Manrope({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"]
});

export const metadata = {
    title: "Ryan Adi Putra",
    description:
        "Pulsify is an open source website traffic analytics tool, it helps users track and analyze their website traffic to understand visitor behavior and improve site performance.Generated by create next app"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={DEFAULT_THEME}>
            <body
                className={`${font.className} bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50 transition-colors font-thin`}
            >
                <Header />
                <div className="pt-32 px-4 w-full max-w-4xl mx-auto">{children}</div>
            </body>
        </html>
    );
}
