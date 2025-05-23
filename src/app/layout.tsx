import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { cookies } from "next/headers";
import { Header } from "./components/header";
import "./globals.css";

import { Theme } from "@/types";

const font = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ryan Adi Putra",
  description:
    "Hi I'm Ryan Adi Putra, Software Engineer specialized in Backend Development",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const theme = (cookieStore.get("theme")?.value as Theme) ?? "dark";

  return (
    <html lang="en" className={theme}>
      <body
        className={`${font.className} antialiased min-h-screen bg-slate-200 dark:bg-slate-950`}
      >
        <div className="relative min-h-screen h-full w-full bg-slate-200 dark:bg-slate-950 transition-colors">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#f1f5f9,transparent_1px),linear-gradient(to_bottom,#f1f5f9,transparent_1px)] dark:bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:120px_100px] [mask-image:radial-gradient(ellipse_60%_100%_at_50%_0%,#000_70%,transparent_100%)] transition-colors"></div>
          <main className="relative pb-4 sm:py-16 text-slate-800 dark:text-slate-400 transition-colors">
            <Header initialTheme={theme} />
            <div className="max-w-screen-lg mx-auto px-8 sm:px-16 mt-32">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
