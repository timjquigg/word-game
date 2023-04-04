"use client";
import { attemptsContext } from "@/providers/attemptsProvider";
import { useContext } from "react";
import Row from "./row";
import { answerContext } from "@/providers/answerProvider";

export default function Attempts() {
  const { attempts, solved, updateSolved } = useContext(attemptsContext);
  const { answer } = useContext(answerContext);

  let check = false;
  const attemptList = attempts.map((attempt, i) => {
    check = true;
    const rows = attempt.map((letter, j) => {
      if (Object.values(letter)[0] !== "correct") {
        check = false;
      }
      return <Row key={`${i}${j}`} letter={letter} />;
    });
    return (
      <div key={i} className="flex space-x-3 my-3 justify-center">
        {rows}
      </div>
    );
  });

  if (check && !solved) {
    updateSolved();
  }

  return <div>{!solved && answer && attemptList}</div>;
}
