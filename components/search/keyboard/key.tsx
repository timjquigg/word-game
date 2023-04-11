"use client";
import StyledButton from "@/components/styledButton";
import { answerContext } from "@/providers/answerProvider";
import { inputContext } from "@/providers/inputProvider";
import { useContext } from "react";

type Props = {
  children: Letter;
};
export default function Key(props: Props) {
  const { focus, updateInput, updateFocus, keys } = useContext(inputContext);
  const { answer } = useContext(answerContext);
  // let bgColor = "";

  let className = `w-8 h-8 border-black border-2 rounded-lg text-center align-middle shadow-md opacity-100 `;

  if (keys[props.children] === "correct") {
    className += "text-neutral-100 bg-green-600 shadow-green-900";
  }

  if (keys[props.children] === "present") {
    className += "bg-yellow-500 shadow-yellow-900";
  }

  if (keys[props.children] === "absent") {
    className += "text-neutral-100 bg-red-600 shadow-red-900";
  }

  const handleClick = () => {
    updateInput(props.children);
    updateFocus(1);
  };

  return (
    <StyledButton
      id={`key${props.children}`}
      callback={handleClick}
      classes={className}
      disabled={focus >= answer.length}
    >
      {props.children}
    </StyledButton>
  );
}
