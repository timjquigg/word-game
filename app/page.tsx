import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import Search from "@/components/search";
import AttemptsProvider from "@/providers/attemptsProvider";
import Attempts from "@/components/attempts";
import AnswerProvider from "@/providers/answerProvider";
import Introduction from "@/components/introduction";
import InputProvider from "@/providers/inputProvider";

export default function Home() {
  return (
    <AnswerProvider>
      <AttemptsProvider>
        <main>
          <Introduction />
          <Attempts />
          <InputProvider>
            <Search />
          </InputProvider>
        </main>
      </AttemptsProvider>
    </AnswerProvider>
  );
}
