"use client";
import { createContext, useEffect, useState } from "react";

type Props = {
  children?: React.ReactNode;
};

interface AnswerContext {
  answer: string;
  resetAnswer: () => void;
  getNewAnswer: () => void;
}

export const answerContext = createContext<AnswerContext>({
  answer: "",
  resetAnswer: () => {},
  getNewAnswer: () => {},
});

export default function AnswerProvider(props: Props) {
  const [answer, setAnswer] = useState("");

  const getNewAnswer = async () => {
    const res = await fetch("/api/answer");
    const word = await res.json();
    // const word = { word: ["tasse"] };
    if (process.env.NODE_ENV === "development") {
      console.log(word.word[0]);
    }
    setAnswer(word.word[0].toUpperCase());
  };

  const resetAnswer = () => {
    setAnswer("");
  };

  const providerData = { answer, getNewAnswer, resetAnswer };

  return (
    <answerContext.Provider value={providerData}>
      {props.children}
    </answerContext.Provider>
  );
}
