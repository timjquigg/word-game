"use client";
import { createContext, useEffect, useState } from "react";

type Props = {
  children?: React.ReactNode;
};

type InputContextType = {
  focus: number;
  updateFocus: (number) => void;
};

export const inputContext = createContext<InputContextType>({
  focus: 0,
  updateFocus: () => {},
});

export default function InputProvider(props: Props) {
  const [focus, setFocus] = useState(0);

  const updateFocus = (id: number) => {
    setFocus(id);
  };

  useEffect(() => {
    const nextBox = document.getElementById(`search${focus}`);
    if (nextBox) {
      nextBox.focus();
      return;
    }
    document.getElementById("submit")?.focus();
  }, [focus]);

  const providerData = { focus, updateFocus };

  return (
    <inputContext.Provider value={providerData}>
      {props.children}
    </inputContext.Provider>
  );
}
