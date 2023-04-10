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

  let className = `w-8 h-8 border-black border-2 rounded-lg text-center align-middle drop-shadow-md opacity-100 `;

  if (keys[props.children] === "correct") {
    className += "bg-green-500";
  }

  if (keys[props.children] === "present") {
    className += "bg-yellow-500";
  }

  if (keys[props.children] === "absent") {
    className += "bg-red-500";
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
