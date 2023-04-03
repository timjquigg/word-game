"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { attemptsContext } from "./attemptsProvider";

type Props = {
  children?: React.ReactNode;
};

interface InputContext {
  focus: number;
  input: string[];
  updateFocus: (id: number) => void;
  updateinput: (id: number, letter: string) => void;
  submitInput: (guess?: string[], target?: string) => void;
}

export const inputContext = createContext<InputContext>({
  focus: 0,
  input: [],
  updateFocus: () => {},
  updateinput: () => {},
  submitInput: () => {},
});

export default function InputProvider(props: Props) {
  const [focus, setFocus] = useState(0);
  const [input, setinput] = useState<string[]>(Array(5).fill(""));
  const { updateAttempts } = useContext(attemptsContext);

  const answer = "hello";

  const updateFocus = (id: number) => {
    setFocus(id);
  };

  const updateinput = (id: number, letter: string) => {
    setinput((prev) => {
      const newinput = [...prev];
      newinput[id] = letter;
      return newinput;
    });
  };

  // const submitInput = (guess: string[], target: string) => {
  const submitInput = (guess?: string[], target?: string) => {
    if (guess === undefined) {
      guess = input;
    }
    if (target === undefined) {
      target = answer;
    }
    updateAttempts(guess, target);
  };

  useEffect(() => {
    const nextBox = document.getElementById(`search${focus}`);
    if (nextBox) {
      nextBox.focus();
      return;
    }
    document.getElementById("submit")?.focus();
  }, [focus]);

  const providerData = { focus, input, updateFocus, updateinput, submitInput };

  return (
    <inputContext.Provider value={providerData}>
      {props.children}
    </inputContext.Provider>
  );
}
