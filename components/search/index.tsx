"use client";
import { useContext } from "react";
import SearchSquare from "./searchSquare";
import StyledButton from "../styledButton";
import { inputContext } from "@/providers/inputProvider";
import { answerContext } from "@/providers/answerProvider";

export default function Search() {
  const { answer } = useContext(answerContext);
  const { submitInput } = useContext(inputContext);
  const searchSquares = Array(5)
    .fill("")
    .map((el, index) => {
      return <SearchSquare key={index} id={index} />;
    });

  const submit = () => {
    submitInput();
  };

  return (
    <>
      {answer && (
        <div className="flex flex-col justify-center content-center">
          <div className="flex justify-center space-x-3 my-3">
            {searchSquares}
          </div>
          <StyledButton callback={submit}>Submit</StyledButton>
        </div>
      )}
    </>
  );
}
