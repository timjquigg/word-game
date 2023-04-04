"use client";
import { attemptsContext } from "@/providers/attemptsProvider";
import { useContext } from "react";
import Row from "./row";
import { answerContext } from "@/providers/answerProvider";

export default function Attempts() {
  const { attempts } = useContext(attemptsContext);
  const { answer } = useContext(answerContext);

  const attemptList = attempts.map((attempt, i) => {
    const rows = attempt.map((letter, j) => {
      return <Row key={`${i}${j}`} letter={letter} />;
    });
    return (
      <div key={i} className="flex space-x-3 my-3 justify-center">
        {rows}
      </div>
    );
  });

  return <div>{answer && attemptList}</div>;
}
