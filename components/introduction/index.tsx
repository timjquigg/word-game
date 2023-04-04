"use client";
import { answerContext } from "@/providers/answerProvider";
import { useContext, useState } from "react";

import StyledButton from "../styledButton";

export default function Introduction() {
  const [display, setDisplay] = useState(true);

  const { getNewAnswer } = useContext(answerContext);

  const playGame = () => {
    setDisplay(false);
    getNewAnswer();
  };

  return (
    <>
      {display && (
        <div className="flex flex-col justify-center max-w-lg mx-auto">
          <p>
            Welcome to Word Game. A copy of a well known game where you have to
            guess a word. On each attempt you will receive feedback on your
            guess. If a letter is in a letter is not in the solution it will
            come back in a red box. If a letter is in the solution, but in the
            wrong place it will be in a yellow box and if the letter is in the
            word and in the correct place it will have a green box.
          </p>
          <StyledButton callback={playGame}>Play</StyledButton>
        </div>
      )}
    </>
  );
}
