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
    setValue(val);
    updateinput(props.id, val);
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
    />
  );
}
