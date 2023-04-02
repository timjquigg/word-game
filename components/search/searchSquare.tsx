"use client";
import { inputContext } from "@/providers/inputProvider";
import { useContext, useState } from "react";

type Props = {
  id: number;
};

export default function SearchSquare(props: Props) {
  const [value, setValue] = useState("");
  const { focus, updateFocus } = useContext(inputContext);

  const handleChange = (input: string) => {
    setValue(input);
    updateFocus(props.id + 1);
  };

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
