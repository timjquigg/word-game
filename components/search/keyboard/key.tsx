"use client";
import { inputContext } from "@/providers/inputProvider";
import { useContext } from "react";

type Props = {
  children: string;
};
export default function Key(props: Props) {
  const { updateInput, updateFocus, keys } = useContext(inputContext);

  let style =
    "w-8 h-8 border-black border-2 rounded-lg text-center align-middle drop-shadow-md opacity-90 hover:drop-shadow-xl hover:opacity-100 focus:outline-none focus:drop-shadow-xl focus:opacity-100 ";

  if (keys[props.children] === "correct") {
    style += "bg-green-500";
  }

  if (keys[props.children] === "present") {
    style += "bg-yellow-500";
  }

  if (keys[props.children] === "absent") {
    style += "bg-red-500";
  }

  const handleClick = () => {
    updateInput(props.children);
    updateFocus(1);
  };

  return (
    <>
      <button onClick={handleClick} className={style}>
        {props.children}
      </button>
    </>
  );
}
