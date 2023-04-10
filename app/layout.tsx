import { Source_Serif_4, Source_Sans_3 } from "next/font/google";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

import { Metadata } from "next";
import "./globals.css";
import Banner from "../components/banner";

export const metadata: Metadata = {
  title: "Word Game",
  description: "A basic word game created with Nextjs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sourceSerif.variable} ${sourceSans.variable} bg-neutral-200`}
    >
      <body className=" overflow-hidden h-screen px-6">
        <Banner />
        <div>{children}</div>
      </body>
    </html>
  );
}
