"use client";
import { useContext, useState } from "react";
import SearchSquare from "./searchSquare";
import StyledButton from "../styledButton";
import { inputContext } from "@/providers/inputProvider";
import { answerContext } from "@/providers/answerProvider";
import { attemptsContext } from "@/providers/attemptsProvider";
import Keyboard from "./keyboard";

export default function Search() {
  const [error, setError] = useState(false);
  const { answer } = useContext(answerContext);
  const { submitInput, updateFocus, resetFocus } = useContext(inputContext);
  const { solved } = useContext(attemptsContext);
  const searchSquares = Array(5)
    .fill("")
    .map((el, index) => {
      return <SearchSquare key={index} id={index} />;
    });

  const submit = () => {
    submitInput()
      .then(() => {
        // console.log("resolve:");
        resetFocus();
        setError(false);
      })
      .catch((err) => {
        // console.log("reject:");
        setError(true);
        resetFocus();
        console.log(err);
      });
  };

  const backSpace = () => {
    updateFocus(-1);
  };

  return (
    <>
      {!solved && answer && (
        <div className="flex flex-col justify-center content-center text-center space-y-3">
          <div className="flex justify-center space-x-3 my-3 ">
            {searchSquares}
          </div>
          {error && <p>No cheating! Please enter a real word</p>}
          <Keyboard />
          <div className="flex flex-row justify-center space-x-3 my-3">
            <StyledButton callback={backSpace}>Backspace</StyledButton>
            <StyledButton callback={submit}>Submit</StyledButton>
          </div>
        </div>
      )}
    </>
  );
}
