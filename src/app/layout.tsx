import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { Header } from "./components/header";
import "./globals.css";

const geistSans = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Ryan Adi Putra",
  description: "Hi I'm Ryan Adi Putra, Software Engineer specialized in Backend Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.style} antialiased min-h-screen`}
      >
        <div className="relative h-screen w-full bg-slate-950">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_100%_at_50%_0%,#000_70%,transparent_100%)]">
          </div>
          <main className="relative py-4 sm:py-16 text-slate-300">
            <Header />
            <div className="max-w-screen-lg mx-auto px-8 sm:px-20 mt-20">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
