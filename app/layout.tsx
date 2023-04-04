import { Metadata } from "next";
import "./globals.css";
import Title from "../components/title";

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
      <body>
        <Title />
        <div>{children}</div>
      </body>
    </html>
  );
}
