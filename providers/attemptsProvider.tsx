"use client";
import checkWord from "@/helpers/checkWord";
import { createContext, useState } from "react";

type Props = {
  children?: React.ReactNode;
};

interface AttemptsContext {
  attempts: LetterCheck[][];
  updateAttempts: (guess: string[], target: string) => void;
}

export const attemptsContext = createContext<AttemptsContext>({
  attempts: [],
  updateAttempts: () => {},
});

export default function AttemptsProvider(props: Props) {
  const [attempts, setAttempts] = useState<LetterCheck[][]>([]);

  const updateAttempts = (guess: string[], target: string) => {
    const attempt = checkWord(guess, target);
    setAttempts((prev) => {
      const newAttempts = [...prev];
      newAttempts.push(attempt);
      return newAttempts;
    });
  };

  const providerData = { attempts, updateAttempts };

  return (
    <attemptsContext.Provider value={providerData}>
      {props.children}
    </attemptsContext.Provider>
  );
}
