import { Sora } from "next/font/google";

import { START_YEAR } from "@/constants";

import "./globals.css";

const font = Sora({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"]
});

const now = new Date().getFullYear();
const exp = now - START_YEAR;

export const metadata = {
    title: "Ryan Adi Putra",
    description: `Ryan Adi Putra is a Software Engineer based in Palu, Indonesia with ${exp}+ years of experience.`
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${font.className} bg-base text-neutral-400 font-light`}>
                <div className="mx-auto min-h-screen max-w-screen-xl">{children}</div>
            </body>
        </html>
    );
}
