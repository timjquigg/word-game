type LetterState = "correct" | "absent" | "present" | null;

interface LetterCheck extends Record<string, LetterState> {
  [key: Letter]: LetterState;
}

interface ResponseObject {
  [key: string]: LetterCheck;
}

type Letter =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X"
  | "Y"
  | "Z";

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
