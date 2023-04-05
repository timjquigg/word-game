"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { attemptsContext } from "./attemptsProvider";
import { answerContext } from "./answerProvider";
import checkLetters from "@/helpers/checkLetters";

type Props = {
  children?: React.ReactNode;
};

interface InputContext {
  focus: number;
  input: string[];
  keys: LetterCheck;
  // word: boolean;
  updateFocus: (increment: number) => void;
  resetFocus: () => void;
  updateInput: (letter: string) => void;
  submitInput: (guess?: string[], target?: string) => Promise<void>;
  resetKeys: () => void;
}

export const inputContext = createContext<InputContext>({
  focus: 0,
  input: [],
  keys: {},
  // word: false,
  updateFocus: () => {},
  resetFocus: () => {},
  updateInput: () => {},
  submitInput: () => Promise.resolve(),
  resetKeys: () => {},
});

export default function InputProvider(props: Props) {
  const [focus, setFocus] = useState(0);
  const [input, setInput] = useState<string[]>(Array(5).fill(""));
  const [keys, setKeys] = useState<LetterCheck>({
    A: "absent",
    B: "absent",
    C: "absent",
    D: "absent",
    E: "absent",
    F: "absent",
    G: "absent",
    H: "absent",
    I: "absent",
    J: "absent",
    K: "absent",
    L: "absent",
    M: "absent",
    N: "absent",
    O: "absent",
    P: "absent",
    Q: "absent",
    R: "absent",
    S: "absent",
    T: "absent",
    U: "absent",
    V: "absent",
    W: "absent",
    X: "absent",
    Y: "absent",
    Z: "absent",
  });
  const { updateAttempts, solved } = useContext(attemptsContext);

  const { answer } = useContext(answerContext);

  const updateFocus = (increment: number) => {
    setFocus((prev) => prev + increment);
  };

  const resetFocus = () => {
    setFocus(0);
  };

  const updateInput = (letter: string) => {
    const id = focus;
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
    const res = await fetch("/api/check", {
      method: "POST",
      body: body,
    });

    const { valid } = await res.json();
    // setWord(valid);

    if (valid) {
      const attempt = updateAttempts(guess, target);
      const updatedKeys = checkLetters(attempt, keys);
      setKeys(updatedKeys);
      updateFocus(0);
      resetInput();
      return Promise.resolve();
    }
    return Promise.reject("invalid word");
  };

  const resetKeys = () => {
    setKeys({
      A: "absent",
      B: "absent",
      C: "absent",
      D: "absent",
      E: "absent",
      F: "absent",
      G: "absent",
      H: "absent",
      I: "absent",
      J: "absent",
      K: "absent",
      L: "absent",
      M: "absent",
      N: "absent",
      O: "absent",
      P: "absent",
      Q: "absent",
      R: "absent",
      S: "absent",
      T: "absent",
      U: "absent",
      V: "absent",
      W: "absent",
      X: "absent",
      Y: "absent",
      Z: "absent",
    });
  };

  useEffect(() => {
    const nextBox = document.getElementById(`search${focus}`);
    if (nextBox) {
      nextBox.focus();
      return;
    }
    document.getElementById("submit")?.focus();
  }, [focus]);

  useEffect(() => {
    resetKeys();
  }, [solved]);

  const providerData = {
    focus,
    input,
    keys,
    // word,
    updateFocus,
    resetFocus,
    updateInput,
    submitInput,
    resetKeys,
  };

  return (
    <inputContext.Provider value={providerData}>
      {props.children}
    </inputContext.Provider>
  );
}
