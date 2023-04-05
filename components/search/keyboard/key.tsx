"use client";
import { inputContext } from "@/providers/inputProvider";
import { useContext } from "react";

type Props = {
  children: string;
};
export default function Key(props: Props) {
  const { updateInput, updateFocus } = useContext(inputContext);

  const handleClick = () => {
    updateInput(props.children);
    updateFocus(1);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="border-black border-2 rounded-lg w-fit p-2 drop-shadow-md opacity-90 hover:drop-shadow-xl focus:outline-none focus:drop-shadow-xl hover:opacity-100 focus:opacity-100"
      >
        {props.children}
      </button>
    </>
  );
}
