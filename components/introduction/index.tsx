"use client";
import { answerContext } from "@/providers/answerProvider";
import { useContext, useState } from "react";

import StyledButton from "../styledButton";
import Letter from "../attempts/letter";
import { attemptsContext } from "@/providers/attemptsProvider";

export default function Introduction() {
  const [display, setDisplay] = useState(true);

  const { getNewAnswer } = useContext(answerContext);
  const { updateSolved } = useContext(attemptsContext);

  const playGame = () => {
    setDisplay(false);
    updateSolved("incomplete");
    getNewAnswer();
  };

  return (
    <>
      {display && (
        <div className="flex flex-col justify-center max-w-lg mx-auto ">
          <p>
            Welcome to Word Game. A game to challenge your vocabulary and
            spelling that resembles another well known game where you have to
            guess a word.
          </p>
          <h2 className="mt-8 mb-4 text-lg font-bold">Rules:</h2>
          <ol className="list-none space-y-3">
            <li>
              <p>You have 6 attempts to guess the word.</p>
            </li>
            <li>
              <p>Each guess must be of a valid word.</p>
            </li>
            <li>
              <p>
                Letters can be typed using onscreen keyboard or physical
                keyboard if present.
              </p>
            </li>
            <li>
              <p>
                After each attempt you will be given feedback on your guess.
              </p>
              <ol className="list-none space-y-3 mt-3 ">
                <li className="flex flex-row space-x-3 content-center">
                  <div className="my-auto">
                    <Letter delay={-1} letter={{ A: "absent" }} />
                  </div>
                  <p className="wrap">
                    If a letter in your guess is not in the word, it will be in
                    a red box.
                  </p>
                </li>
                <li className="flex flex-row space-x-3 content-center">
                  <div className="my-auto">
                    <Letter delay={-1} letter={{ A: "present" }} />
                  </div>
                  <p>
                    If a letter is in the solution, but in the wrong place it
                    will be in a yellow box.
                  </p>
                </li>
                <li className="flex flex-row space-x-3 content-center">
                  <div className="my-auto">
                    <Letter delay={-1} letter={{ A: "correct" }} />
                  </div>
                  <p>
                    If a letter is in the solution and in the right place it
                    will be in a green box.
                  </p>
                </li>
              </ol>
            </li>
          </ol>

          <div className="mx-auto mt-8">
            <StyledButton
              id="playGame"
              classes="bg-blue-500 rounded-lg min-w-[10rem] p-2"
              callback={playGame}
            >
              Play
            </StyledButton>
          </div>
        </div>
      )}
    </>
  );
}
