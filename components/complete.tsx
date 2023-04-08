"use client";
import { useContext } from "react";
import StyledButton from "./styledButton";
import { attemptsContext } from "@/providers/attemptsProvider";
import { answerContext } from "@/providers/answerProvider";

export default function Complete() {
  const { solved, attempts, resetAttempts, updateSolved } =
    useContext(attemptsContext);
  const { answer, getNewAnswer } = useContext(answerContext);

  const playAgain = () => {
    resetAttempts();
    updateSolved("incomplete");
    getNewAnswer();
  };

  return (
    <>
      {solved === "yes" && (
        <div className="flex flex-col justify-center max-w-lg mx-auto text-center">
          <p>{`Congratulations! It took you ${attempts.length} attempts to get the word ${answer}.`}</p>
          <div className="mx-auto my-8">
            <StyledButton id="playAgain" callback={playAgain}>
              Play again
            </StyledButton>
          </div>
        </div>
      )}
      {solved === "no" && (
        <div className="flex flex-col justify-center max-w-lg mx-auto text-center">
          <p>You lose!</p>
          <p>🥲🥲🥲🥲🥲🥲🥲🥲🥲</p>
          <p>{`The word was ${answer}.`}</p>
          <div className="mx-auto my-8">
            <StyledButton callback={playAgain}>Play again</StyledButton>
          </div>
        </div>
      )}
    </>
  );
}
