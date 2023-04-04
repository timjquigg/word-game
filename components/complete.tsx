"use client";
import { useContext } from "react";
import StyledButton from "./styledButton";
import { attemptsContext } from "@/providers/attemptsProvider";
import { answerContext } from "@/providers/answerProvider";

export default function Complete() {
  const { solved, attempts, resetAttempts, updateSolved } =
    useContext(attemptsContext);
  const { getNewAnswer } = useContext(answerContext);

  const playAgain = () => {
    resetAttempts();
    updateSolved();
    getNewAnswer();
  };

  return (
    <>
      {solved && (
        <div className="flex flex-col justify-center max-w-lg mx-auto text-center">
          <p>{`Congratulations! You got the correct word in ${attempts.length} attempts.`}</p>
          <StyledButton callback={playAgain}>Play again</StyledButton>
        </div>
      )}
    </>
  );
}
