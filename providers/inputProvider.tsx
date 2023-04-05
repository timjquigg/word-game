"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { attemptsContext } from "./attemptsProvider";
import { answerContext } from "./answerProvider";

type Props = {
  children?: React.ReactNode;
};

interface InputContext {
  focus: number;
  input: string[];
  // word: boolean;
  updateFocus: (id: number) => void;
  updateinput: (id: number, letter: string) => void;
  submitInput: (guess?: string[], target?: string) => Promise<void>;
}

export const inputContext = createContext<InputContext>({
  focus: 0,
  input: [],
  // word: false,
  updateFocus: () => {},
  updateinput: () => {},
  submitInput: () => Promise.resolve(),
});

export default function InputProvider(props: Props) {
  const [focus, setFocus] = useState(0);
  const [input, setInput] = useState<string[]>(Array(5).fill(""));
  // const [word, setWord] = useState(false);
  const { updateAttempts } = useContext(attemptsContext);

  const { answer } = useContext(answerContext);

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

  const submitInput = async (
    guess?: string[],
    target?: string
  ): Promise<void> => {
    if (guess === undefined) {
      guess = input;
    }
    if (target === undefined) {
      target = answer;
    }
    const body = JSON.stringify(guess.join(""));
    console.log(body);
    const res = await fetch("/api/check", {
      method: "POST",
      body: body,
    });
    const { valid } = await res.json();
    // setWord(valid);

    if (valid) {
      updateAttempts(guess, target);
      updateFocus(0);
      resetInput();
      return Promise.resolve();
    }
    return Promise.reject("invalid word");
  };

  useEffect(() => {
    const nextBox = document.getElementById(`search${focus}`);
    if (nextBox) {
      nextBox.focus();
      return;
    }
    document.getElementById("submit")?.focus();
  }, [focus]);

  const providerData = {
    focus,
    input,
    // word,
    updateFocus,
    updateinput,
    submitInput,
  };

  return (
    <inputContext.Provider value={providerData}>
      {props.children}
    </inputContext.Provider>
  );
}
