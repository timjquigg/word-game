"use client";
import { useState } from "react";

export default function SearchBar() {
  const [value, setValue] = useState("");

  const handleChange = (input: string) => {
    setValue(input);
  };
  return <input value={value} onChange={(e) => handleChange(e.target.value)} />;
}
