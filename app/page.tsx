import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import Search from "@/components/search";
import AttemptsProvider from "@/providers/attemptsProvider";
import Attempts from "@/components/attempts";

export default function Home() {
  return (
    <AttemptsProvider>
      <main>
        <Attempts />
        <Search />
        {/* <div style={{ display: "flex" }}>{checkMap}</div> */}
      </main>
    </AttemptsProvider>
  );
}
