"use client";
import checkWord from "@/helpers/checkWord";
import { createContext, useState } from "react";

type Props = {
  children?: React.ReactNode;
};

interface AttemptsContext {
  attempts: LetterCheck[][];
  updateAttempts: (guess: string[], target: string) => LetterCheck[];
  solved: boolean;
  updateSolved: () => void;
  resetAttempts: () => void;
}

export const attemptsContext = createContext<AttemptsContext>({
  attempts: [],
  updateAttempts: () => [{}],
  solved: false,
  updateSolved: () => {},
  resetAttempts: () => {},
});

export default function AttemptsProvider(props: Props) {
  const [attempts, setAttempts] = useState<LetterCheck[][]>([]);
  const [solved, setSolved] = useState(false);

  const updateAttempts = (guess: string[], target: string): LetterCheck[] => {
    const attempt = checkWord(guess, target);
    setAttempts((prev) => {
      const newAttempts = [...prev];
      newAttempts.push(attempt);
      return newAttempts;
    });
    return attempt;
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
