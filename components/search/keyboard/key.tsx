"use client";
import { answerContext } from "@/providers/answerProvider";
import { inputContext } from "@/providers/inputProvider";
import { useContext } from "react";

type Props = {
  children: Letter;
};
export default function Key(props: Props) {
  const { focus, updateInput, updateFocus, keys } = useContext(inputContext);
  const { answer } = useContext(answerContext);
  let bgColor = "";

  // let style =
  //   "w-8 h-8 border-black border-2 rounded-lg text-center align-middle drop-shadow-md opacity-90 hover:drop-shadow-xl hover:opacity-100 focus:outline-none focus:drop-shadow-xl focus:opacity-100 ";

  if (keys[props.children] === "correct") {
    bgColor = "green-500";
  }

  if (keys[props.children] === "present") {
    bgColor = "yellow-500";
  }

  if (keys[props.children] === "absent") {
    bgColor = "red-500";
  }

  let className = `w-8 h-8 border-black border-2 rounded-lg text-center align-middle drop-shadow-md opacity-100 bg-center transition-colors bg-${bgColor} `;

  className += ` hover:bg-gradient-to-r from-white to-${bgColor} active:bg-${bgColor} hover:bg-gradient-to-l `;
  const handleClick = () => {
    updateInput(props.children);
    updateFocus(1);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={className}
        disabled={focus >= answer.length}
      >
        {props.children}
      </button>
    </>
  );
}
