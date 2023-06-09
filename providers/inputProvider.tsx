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
  input: Letter[];
  keys: LetterCheck;
  updateFocus: (increment: number) => void;
  resetFocus: () => void;
  updateInput: (letter: Letter) => void;
  submitInput: (guess?: Letter[], target?: string) => Promise<void>;
  resetKeys: () => void;
  fullReset: () => void;
}

export const inputContext = createContext<InputContext>({
  focus: 0,
  input: [],
  keys: {},
  updateFocus: () => {},
  resetFocus: () => {},
  updateInput: () => {},
  submitInput: () => Promise.resolve(),
  resetKeys: () => {},
  fullReset: () => {},
});

export default function InputProvider(props: Props) {
  const [focus, setFocus] = useState(0);
  const [input, setInput] = useState<Letter[]>(Array(5).fill(""));
  const [keys, setKeys] = useState<LetterCheck>({
    A: null,
    B: null,
    C: null,
    D: null,
    E: null,
    F: null,
    G: null,
    H: null,
    I: null,
    J: null,
    K: null,
    L: null,
    M: null,
    N: null,
    O: null,
    P: null,
    Q: null,
    R: null,
    S: null,
    T: null,
    U: null,
    V: null,
    W: null,
    X: null,
    Y: null,
    Z: null,
  });
  const { updateAttempts, solved } = useContext(attemptsContext);

  const { answer } = useContext(answerContext);

  const fullReset = () => {
    resetFocus();
    resetInput();
    resetKeys();
  };

  const updateFocus = (increment: number) => {
    setFocus((prev) => {
      const newFocus = prev + increment;
      if (newFocus < 0) {
        return prev;
      }

      if (newFocus === answer.length) {
        document.getElementById("submit")?.focus();
        return newFocus;
      }

      return newFocus;
    });
  };

  const resetFocus = () => {
    setFocus(0);
  };

  const updateInput = (letter: Letter) => {
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
    guess?: Letter[],
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
      A: null,
      B: null,
      C: null,
      D: null,
      E: null,
      F: null,
      G: null,
      H: null,
      I: null,
      J: null,
      K: null,
      L: null,
      M: null,
      N: null,
      O: null,
      P: null,
      Q: null,
      R: null,
      S: null,
      T: null,
      U: null,
      V: null,
      W: null,
      X: null,
      Y: null,
      Z: null,
    });
  };

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
    fullReset,
  };

  return (
    <inputContext.Provider value={providerData}>
      {props.children}
    </inputContext.Provider>
  );
}
