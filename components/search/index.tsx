"use client";
import { useContext, useState } from "react";
import SearchSquare from "./searchSquare";
import StyledButton from "../styledButton";
import { inputContext } from "@/providers/inputProvider";
import { answerContext } from "@/providers/answerProvider";
import { attemptsContext } from "@/providers/attemptsProvider";

export default function Search() {
  const [error, setError] = useState(false);
  const { answer } = useContext(answerContext);
  const { submitInput } = useContext(inputContext);
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
        setError(false);
      })
      .catch((err) => {
        // console.log("reject:");
        setError(true);
        console.log(err);
      });
  };

  return (
    <>
      {!solved && answer && (
        <div className="flex flex-col justify-center content-center">
          <div className="flex justify-center space-x-3 my-3">
            {searchSquares}
            {error && <p>Invalid word!</p>}
          </div>
          <StyledButton callback={submit}>Submit</StyledButton>
        </div>
      )}
    </>
  );
}
