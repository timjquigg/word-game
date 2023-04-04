"use client";
import { createContext, useEffect, useState } from "react";

type Props = {
  children?: React.ReactNode;
};

interface AnswerContext {
  answer: string;
  getNewAnswer: () => void;
}

export const answerContext = createContext<AnswerContext>({
  answer: "",
  getNewAnswer: () => {},
});

export default function AnswerProvider(props: Props) {
  const [answer, setAnswer] = useState("");

  const getNewAnswer = async () => {
    const res = await fetch("/api/answer");
    const word = await res.json();
    console.log(word.word[0]);
    setAnswer(word.word[0].toUpperCase());
  };

  // useEffect(() => {
  //   getNewAnswer();
  // }, []);

  const providerData = { answer, getNewAnswer };

  return (
    <answerContext.Provider value={providerData}>
      {props.children}
    </answerContext.Provider>
  );
}
