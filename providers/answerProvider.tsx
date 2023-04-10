"use client";
import { createContext, useState } from "react";

type Props = {
  children?: React.ReactNode;
};

interface AnswerContext {
  answer: string;
  definition: string[];
  resetAnswer: () => void;
  getNewAnswer: () => void;
}

export const answerContext = createContext<AnswerContext>({
  answer: "",
  definition: [""],
  resetAnswer: () => {},
  getNewAnswer: () => {},
});

export default function AnswerProvider(props: Props) {
  const [answer, setAnswer] = useState("");
  const [definition, setDefinition] = useState([""]);

  const getNewAnswer = async () => {
    const res = await fetch("/api/answer");
    const json = await res.json();
    const word = json.word[0];
    const definition = json.definition;
    if (process.env.NODE_ENV === "development") {
      console.log(word);
    }
    setAnswer(word.toUpperCase());
    setDefinition(definition);
  };

  const resetAnswer = () => {
    setAnswer("");
  };

  const providerData = { answer, definition, getNewAnswer, resetAnswer };

  return (
    <answerContext.Provider value={providerData}>
      {props.children}
    </answerContext.Provider>
  );
}
