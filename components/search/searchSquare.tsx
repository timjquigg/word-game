"use client";
import { inputContext } from "@/providers/inputProvider";
import { useContext, useEffect, useState } from "react";

type Props = {
  id: number;
};

export default function SearchSquare(props: Props) {
  const {
    focus,
    input,
    updateFocus,
    updateInput: updateinput,
  } = useContext(inputContext);
  const [value, setValue] = useState(input[props.id]);

  useEffect(() => {
    setValue(input[props.id]);
  }, [input, props.id]);

  const reset = () => {
    setValue("");
  };

  let style =
    "w-7 h-7 bg-transparent text-center align-middle rounded-lg border-black border-solid border-2  ";

  if (focus === props.id) {
    style += "outline-none drop-shadow-xl border-slate-50";
  }

  return (
    <p id={`search${props.id}`} className={style}>
      {value}
    </p>
  );
}
