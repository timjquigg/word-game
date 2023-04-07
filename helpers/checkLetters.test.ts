import checkLetters from "./checkLetters";

test("Returns expected value based on input when guess is correct", () => {
  const attempt: LetterCheck[] = [
    { A: "present" },
    { R: "present" },
    { E: "present" },
    { A: "absent" },
    { S: "absent" },
  ];
  const keys = {
    A: null,
    B: null,
    C: null,
    D: null,
    E: null,
    F: null,
    G: null,
    H: null,
    I: null,
    J: null,
    K: null,
    L: null,
    M: null,
    N: null,
    O: null,
    P: null,
    Q: null,
    R: null,
    S: null,
    T: null,
    U: null,
    V: null,
    W: null,
    X: null,
    Y: null,
    Z: null,
  };

  const expectedOutput = {
    A: "present",
    B: null,
    C: null,
    D: null,
    E: "present",
    F: null,
    G: null,
    H: null,
    I: null,
    J: null,
    K: null,
    L: null,
    M: null,
    N: null,
    O: null,
    P: null,
    Q: null,
    R: "present",
    S: "absent",
    T: null,
    U: null,
    V: null,
    W: null,
    X: null,
    Y: null,
    Z: null,
  };

  const result = checkLetters(attempt, keys);
  expect(result).toEqual(expectedOutput);
});
