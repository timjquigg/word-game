"use client";
import { useContext } from "react";
import StyledButton from "./styledButton";
import { attemptsContext } from "@/providers/attemptsProvider";
import { answerContext } from "@/providers/answerProvider";

export default function Complete() {
  const { solved, attempts, resetAttempts, updateSolved } =
    useContext(attemptsContext);
  const { answer, definition, resetAnswer, getNewAnswer } =
    useContext(answerContext);

  const playAgain = () => {
    resetAnswer();
    resetAttempts();
    updateSolved("incomplete");
    getNewAnswer();
  };

  const definitionList = definition.map((el, index) => {
    return <li key={`definition${index}`}>{el}</li>;
  });

  return (
    <>
      {solved === "yes" && (
        <div className="flex flex-col justify-center max-w-lg mx-auto text-center">
          <p>{`Congratulations! It took you ${attempts.length} attempts to get the word.`}</p>
          <p className="text-xl mt-8">{`${answer} `}</p>
          <div className="flex flex-col justify-start text-left mt-8">
            <p>Definitions:</p>
            <ol className="list-decimal pl-8 space-y-3">{definitionList}</ol>
          </div>
          <div className="mx-auto my-8">
            <StyledButton
              id="playAgain"
              classes="bg-blue-500 rounded-lg min-w-[10rem] p-2"
              callback={playAgain}
            >
              Play again
            </StyledButton>
          </div>
        </div>
      )}
      {solved === "no" && (
        <div className="flex flex-col justify-center max-w-lg mx-auto text-center">
          <p>You lose!</p>
          <p>🥲🥲🥲🥲🥲🥲🥲🥲🥲</p>
          <p>{`The answer was:`}</p>
          <p className="text-xl mt-8">{`${answer} `}</p>
          <div className="flex flex-col justify-start text-left mt-8">
            <p>Definitions:</p>
            <ol className="list-decimal pl-8 space-y-3">{definitionList}</ol>
          </div>
          <div className="mx-auto my-8">
            <StyledButton
              id="playAgain"
              classes="bg-blue-500 rounded-lg min-w-[10rem] p-2"
              callback={playAgain}
            >
              Play again
            </StyledButton>
          </div>
        </div>
      )}
    </>
  );
}
