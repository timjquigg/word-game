"use client";
import { attemptsContext } from "@/providers/attemptsProvider";
import { useContext } from "react";
import Letter from "./letter";
import { answerContext } from "@/providers/answerProvider";

export default function Attempts() {
  const { attempts, solved, updateSolved } = useContext(attemptsContext);
  const { answer } = useContext(answerContext);

  let check = false;
  const attemptList = attempts.slice(0, 5).map((attempt, i) => {
    check = true;
    const row = attempt.map((letter, j) => {
      if (Object.values(letter)[0] !== "correct") {
        check = false;
      }
      return <Letter key={`${i}${j}`} letter={letter} />;
    });
    return (
      <div key={i} className="flex space-x-3 my-3 justify-center">
        {row}
      </div>
    );
  });

  if (!check && attempts.length === 6) {
    updateSolved("no");
  }

  if (check && solved === "incomplete") {
    updateSolved("yes");
  }

  return <div>{solved === "incomplete" && answer && attemptList}</div>;
}
