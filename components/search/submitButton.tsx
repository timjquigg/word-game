"use client";

import { inputContext } from "@/providers/inputProvider";
import { useContext } from "react";

type Props = {
  children?: string;
};

export default function SubmitButton(props: Props) {
  const { submitInput } = useContext(inputContext);

  const handleClick = () => {
    console.log("submit");
    // submitInput(["h", "e", "l", "p", "s"], "hello");
    submitInput();
  };

  return (
    <button id="submit" onClick={handleClick}>
      {props.children}
    </button>
  );
}
