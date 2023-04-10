"use client";
import { inputContext } from "@/providers/inputProvider";
import { useContext, useEffect, useState } from "react";

type Props = {
  id: number;
  submitted: boolean;
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
    "w-7 h-7 bg-transparent text-center align-middle rounded-lg border-black border-solid border-2 ";

  if (focus === props.id) {
    style += "drop-shadow-xl border-slate-50 animate-beat ";
  }

  if (props.submitted) {
    style += "animate-submit";
  }

  return (
    <div className={style}>
      <p id={`search${props.id}`}>{value}</p>
    </div>
  );
}
