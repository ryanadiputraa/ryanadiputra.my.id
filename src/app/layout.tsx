import { Sora } from "next/font/google";

import "./globals.css";

const font = Sora({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"]
});

export const metadata = {
    title: "Ryan Adi Putra",
    description: "Personal website, portfolio, project showcase, and tech posts."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${font.className} bg-base text-neutral-400 font-light`}>
                <div className="mx-auto max-w-screen-xl">{children}</div>
            </body>
        </html>
    );
}
