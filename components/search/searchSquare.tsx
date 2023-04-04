"use client";
import { inputContext } from "@/providers/inputProvider";
import { useContext, useEffect, useState } from "react";

type Props = {
  id: number;
};

export default function SearchSquare(props: Props) {
  const { focus, input, updateFocus, updateinput } = useContext(inputContext);
  const [value, setValue] = useState(input[props.id]);

  const handleChange = (val: string) => {
    const uppcaseVal = val.toUpperCase();
    setValue(uppcaseVal);
    updateinput(props.id, uppcaseVal);
    updateFocus(props.id + 1);
  };

  useEffect(() => {
    setValue(input[props.id]);
  }, [input, props.id]);

  const reset = () => {
    setValue("");
  };

  return (
    <input
      value={value}
      onChange={(e) => handleChange(e.target.value)}
      onFocus={reset}
      id={`search${props.id}`}
      autoFocus={props.id === focus}
      autoComplete="off"
      // className="w-6 h-6 text-center outline outline-2"
      className="w-6 h-6 bg-transparent text-center rounded-lg border-black border-solid border-2 focus:outline-none focus:drop-shadow-xl focus:border-slate-50 "
    />
  );
}
