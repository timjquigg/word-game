"use client";
import { attemptsContext } from "@/providers/attemptsProvider";
import { useContext } from "react";
import Row from "./row";

export default function Attempts() {
  const { attempts } = useContext(attemptsContext);

  const attemptList = attempts.map((attempt, i) => {
    const rows = attempt.map((letter, j) => {
      console.log(letter);
      return <Row key={`${i}${j}`} letter={letter} />;
    });
    return (
      <div key={i} className="flex space-x-3 my-3 justify-center">
        {rows}
      </div>
    );
  });

  return <div>{attemptList}</div>;
}
