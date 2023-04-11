type Solved = "yes" | "no" | "incomplete" | null;

type LetterState = "correct" | "absent" | "present" | null;

interface LetterCheck extends Record<string, LetterState> {
  [key: Letter]: LetterState;
}

interface ResponseObject {
  [key: string]: LetterCheck;
}

export const letter = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "",
] as const;

type Letter = typeof letter[number];

export const isLetter = (x: any): x is Letter => letter.includes(x);

interface Occurences extends Record<string, number> {
  [key: Letter]: number;
}

interface DuplicateError extends Record<string, number[]> {
  [key: Letter]: number[];
}

type LetterPositions = {
  target: number[];
  guess: number[];
};

interface Check extends Record<string, LetterPositions> {
  [key: Letter]: LetterPositions;
}
