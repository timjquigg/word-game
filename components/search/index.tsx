"use client";
import { useContext, useState } from "react";
import SearchSquare from "./searchSquare";
import StyledButton from "../styledButton";
import { inputContext } from "@/providers/inputProvider";
import { answerContext } from "@/providers/answerProvider";
import { attemptsContext } from "@/providers/attemptsProvider";
import Keyboard from "./keyboard";
import Loading from "@/components/search/loading";

export default function Search() {
  const [error, setError] = useState(false);
  // const [submitted, setSutmitted] = useState(false);
  const { answer } = useContext(answerContext);
  const { submitInput, updateFocus, resetFocus, fullReset } =
    useContext(inputContext);
  const { solved, updateSolved } = useContext(attemptsContext);
  const searchSquares = Array(5)
    .fill("")
    .map((el, index) => {
      return <SearchSquare key={index} id={index} />;
    });

  const submit = () => {
    // setSutmitted(true);
    submitInput()
      .then(() => {
        // console.log("resolve:");
        // setSutmitted(false);
        resetFocus();
        setError(false);
      })
      .catch((err) => {
        // console.log("reject:");
        // setSutmitted(false);
        setError(true);
        resetFocus();
        console.log(err);
      });
  };

  const backSpace = () => {
    updateFocus(-1);
  };

  const giveUp = () => {
    updateSolved("no");
    fullReset();
  };

  return (
    <>
      {solved === "incomplete" && !answer && <Loading />}
      {solved === "incomplete" && answer && (
        <div className="flex flex-col justify-center content-center text-center space-y-3">
          <div className="flex flex-row justify-center items-center space-x-3 my-3 ">
            {searchSquares}
          </div>
          {error && <p>No cheating! Please enter a real word</p>}
          <div className="absolute inset-x-0 bottom-20">
            <Keyboard />
            <div className="flex flex-row justify-center space-x-3 my-3">
              <StyledButton
                id="backspace"
                classes="bg-blue-500 rounded-lg min-w-[10rem] p-2"
                callback={backSpace}
              >
                Backspace
              </StyledButton>
              <StyledButton
                id="submit"
                classes="bg-blue-500 rounded-lg min-w-[10rem] p-2"
                callback={submit}
              >
                Submit
              </StyledButton>
            </div>
            <div>
              <StyledButton
                id="quit"
                classes="bg-blue-500 rounded-lg min-w-[10rem] p-2"
                callback={giveUp}
              >
                Give Up
              </StyledButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
