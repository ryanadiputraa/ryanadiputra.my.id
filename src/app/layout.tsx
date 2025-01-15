import type { Metadata } from "next";
import { Lato } from "next/font/google";
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
        className={`${geistSans.style} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
