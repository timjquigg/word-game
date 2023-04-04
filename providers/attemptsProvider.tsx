"use client";
import checkWord from "@/helpers/checkWord";
import { SetStateAction, createContext, useState } from "react";

type Props = {
  children?: React.ReactNode;
};

interface AttemptsContext {
  attempts: LetterCheck[][];
  updateAttempts: (guess: string[], target: string) => void;
  solved: boolean;
  updateSolved: () => void;
  resetAttempts: () => void;
}

export const attemptsContext = createContext<AttemptsContext>({
  attempts: [],
  updateAttempts: () => {},
  solved: false,
  updateSolved: () => {},
  resetAttempts: () => {},
});

export default function AttemptsProvider(props: Props) {
  const [attempts, setAttempts] = useState<LetterCheck[][]>([]);
  const [solved, setSolved] = useState(false);

  const updateAttempts = (guess: string[], target: string) => {
    const attempt = checkWord(guess, target);
    setAttempts((prev) => {
      const newAttempts = [...prev];
      newAttempts.push(attempt);
      return newAttempts;
    });
  };

  const resetAttempts = () => {
    setAttempts([]);
  };

  const updateSolved = () => {
    setSolved((prev) => !prev);
  };

  const providerData = {
    attempts,
    updateAttempts,
    solved,
    updateSolved,
    resetAttempts,
  };

  return (
    <attemptsContext.Provider value={providerData}>
      {props.children}
    </attemptsContext.Provider>
  );
}
