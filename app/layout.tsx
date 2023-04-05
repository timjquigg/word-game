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
    <html lang="en" className="bg-neutral-200">
      <body className="h-screen">
        {/* <div id="banner" className="container mx-auto"> */}
        <Banner />
        {/* </div> */}
        <div>{children}</div>
      </body>
    </html>
  );
}
