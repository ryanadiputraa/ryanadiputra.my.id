import { Sora } from "next/font/google";

import { Footer } from "@/components/footer";

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
            <body
                className={`${font.className} bg-[url('/assets/img/bg.jpg')] bg-cover bg-center bg-no-repeat bg-neutral-900 text-neutral-50 transition-colors `}
            >
                <div className="pt-20 min-h-[94vh]">{children}</div>
                <Footer />
            </body>
        </html>
    );
}
