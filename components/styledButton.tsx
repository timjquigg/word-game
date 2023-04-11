"use client";

import { useEffect, useState, MouseEvent } from "react";

type Props = {
  children?: string;
  id: string;
  classes?: string;
  disabled?: boolean;
  callback: () => void;
};

interface Style {
  top: string;
  left: string;
}

export default function StyledButton(props: Props) {
  const [clicked, setClicked] = useState(false);
  const [className, setClassName] = useState("hidden");
  const [style, setStyle] = useState<Style>({ top: "0px", left: "0px" });

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
    // Safari on iOs does not support vibrate :(
    window?.navigator?.vibrate?.(50);

    const buttonCoordinates = getOffset(e.currentTarget);
    const x = e.clientX - buttonCoordinates.left;
    const y = e.clientY - buttonCoordinates.top;
    setClassName(
      `absolute bg-white -translate-x-1/2 -translate-y-1/2 rounded-full animate-ripple`
    );
    setStyle({ left: `${x}px`, top: `${y}px` });
    setClicked(true);
    props.callback();
  };

  return (
    <button
      id={props.id}
      onClick={(event) => clickHandler(event)}
      autoFocus={false}
      disabled={props.disabled}
      className={`relative overflow-hidden uppercase tracking-wider drop-shadow-md opacity-90 hover:scale-105 hover:opacity-100 hover:drop-shadow-xl focus:opacity-100 focus:scale-105 focus:drop-shadow-xl focus:outline-none  ${props.classes}`}
    >
      {props.children}
      <span className={className} style={style}></span>
    </button>
  );
}
