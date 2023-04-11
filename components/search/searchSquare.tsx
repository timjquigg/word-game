"use client";
import { useContext, useEffect, useRef, useState, KeyboardEvent } from "react";
import { inputContext } from "@/providers/inputProvider";

const letter = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "",
] as const;

type Letter = typeof letter[number];

const isLetter = (x: any): x is Letter => letter.includes(x);

type Props = {
  id: number;
  submitted: boolean;
};

export default function SearchSquare(props: Props) {
  const { focus, input, updateInput, updateFocus } = useContext(inputContext);
  const [value, setValue] = useState(input[props.id]);

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setValue(input[props.id]);
  }, [input, props.id]);

  useEffect(() => {
    if (focus === props.id) {
      inputRef?.current?.focus();
    }
  }, [focus, props.id]);

  const handleKeyPress = (e: KeyboardEvent) => {
    const letter = e.key.toUpperCase();
    if (isLetter(letter)) {
      updateInput(letter);
      updateFocus(1);
    }
  };

  let style =
    "w-7 h-7 bg-transparent text-center align-middle rounded-lg border-black border-solid border-2 focus:outline-none ";

  if (focus === props.id) {
    style += "drop-shadow-xl border-slate-50 animate-beat ";
  }

  if (props.submitted) {
    style += "animate-submit";
  }

  return (
    <div
      onClick={() => {
        inputRef?.current?.focus();
      }}
      className={style}
    >
      <p
        tabIndex={0}
        id={`search${props.id}`}
        onKeyDown={handleKeyPress}
        ref={inputRef}
        className="focus:outline-none"
      >
        {value}
      </p>
    </div>
  );
}
