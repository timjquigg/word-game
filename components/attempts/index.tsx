"use client";
import { attemptsContext } from "@/providers/attemptsProvider";
import { useContext } from "react";

export default function Attempts() {
  const { attempts } = useContext(attemptsContext);

  const attemptList = attempts.map((el, i) => {
    const attempt = el.map((el, j) => {
      return (
        <div key={`${i}${j}`}>
          <p style={{ margin: "1rem" }}>
            {Object.keys(el)} - {Object.values(el)}
          </p>
        </div>
      );
    });
    return <div key={i}>{attempt}</div>;
  });

  return <div>{attemptList}</div>;
}
