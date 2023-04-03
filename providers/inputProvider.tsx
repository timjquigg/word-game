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
  const [input, setInput] = useState<string[]>(Array(5).fill(""));
  const { updateAttempts } = useContext(attemptsContext);

  const answer = "hello".toUpperCase();

  const updateFocus = (id: number) => {
    setFocus(id);
  };

  const updateinput = (id: number, letter: string) => {
    setInput((prev) => {
      const newinput = [...prev];
      newinput[id] = letter;
      return newinput;
    });
  };

  const resetInput = () => {
    setInput((prev) => {
      const newInput = Array(5).fill("");
      return newInput;
    });
  };

  const submitInput = (guess?: string[], target?: string) => {
    if (guess === undefined) {
      guess = input;
    }
    if (target === undefined) {
      target = answer;
    }
    updateAttempts(guess, target);
    updateFocus(0);
    resetInput();
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
