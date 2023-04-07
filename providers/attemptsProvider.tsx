"use client";
import checkWord from "@/helpers/checkWord";
import { createContext, useState } from "react";

type Props = {
  children?: React.ReactNode;
};

interface AttemptsContext {
  attempts: LetterCheck[][];
  updateAttempts: (guess: Letter[], target: string) => LetterCheck[];
  solved: Solved;
  updateSolved: (value: Solved) => void;
  resetAttempts: () => void;
}

export const attemptsContext = createContext<AttemptsContext>({
  attempts: [],
  updateAttempts: () => [{}],
  solved: "incomplete",
  updateSolved: (value: Solved) => {},
  resetAttempts: () => {},
});

export default function AttemptsProvider(props: Props) {
  const [attempts, setAttempts] = useState<LetterCheck[][]>([]);
  const [solved, setSolved] = useState<Solved>("incomplete");

  const updateAttempts = (guess: Letter[], target: string): LetterCheck[] => {
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

  const updateSolved = (value: Solved) => {
    setSolved(value);
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
