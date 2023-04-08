"use client";

import { useEffect, useState, MouseEvent } from "react";

type Props = {
  children?: string;
  id: string;
  callback: () => void;
};

interface Coordinates {
  x: number;
  y: number;
}

interface Style {
  top: string;
  left: string;
}

export default function StyledButton(props: Props) {
  const [coordinates, setCoordinates] = useState<Coordinates>({});
  const [clicked, setClicked] = useState(false);
  const [className, setClassName] = useState("hidden");
  const [style, setStyle] = useState<Style>({ top: "", left: "" });

  useEffect(() => {
    if (clicked) {
      removeClicked();
    }
  }, [clicked]);

  const removeClicked = () => {
    setTimeout(() => {
      setClicked(false);
      setClassName("hidden");
    }, 1000);
  };

  const getOffset = (el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY,
    };
  };

  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    const buttonCoordinates = getOffset(e.currentTarget);
    const x = e.clientX - buttonCoordinates.left;
    const y = e.clientY - buttonCoordinates.top;
    setClassName(
      `absolute bg-white -translate-x-1/2 -translate-y-1/2 rounded-full animate-ripple`
    );
    setStyle({ left: `${x}px`, top: `${y}px` });
    setClicked(true);
    setCoordinates({ x, y });
    props.callback();
  };

  return (
    <button
      id={props.id}
      onClick={(event) => clickHandler(event)}
      autoFocus={false}
      className="relative overflow-hidden uppercase tracking-wider bg-blue-500 rounded-lg min-w-[10rem] p-2 drop-shadow-md opacity-90 hover:opacity-100 hover:drop-shadow-xl"
    >
      {props.children}
      <span className={className} style={style}></span>
    </button>
  );
}
