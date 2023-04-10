import Search from "@/components/search";
import AttemptsProvider from "@/providers/attemptsProvider";
import Attempts from "@/components/attempts";
import AnswerProvider from "@/providers/answerProvider";
import Introduction from "@/components/introduction";
import InputProvider from "@/providers/inputProvider";
import Complete from "@/components/complete";

export default function Home() {
  return (
    <AnswerProvider>
      <AttemptsProvider>
        <main className="container flex flex-col justify-between content-center mx-auto my-8">
          <Introduction />
          <Attempts />
          <InputProvider>
            <Search />
          </InputProvider>
          <Complete />
        </main>
      </AttemptsProvider>
    </AnswerProvider>
  );
}
