import checkWord from "./checkWord";

test("Returns expected value based on input when guess is correct", () => {
  const guess: Letter[] = ["D", "O", "U", "M", "S"];
  const target = "DOUMS";

  const expectedOutput = [
    { D: "correct" },
    { O: "correct" },
    { U: "correct" },
    { M: "correct" },
    { S: "correct" },
  ];

  const result = checkWord(guess, target);

  expect(result).toEqual(expectedOutput);
});

test("Returns expected value based on input when guess has some correct, some present and some absent", () => {
  const guess: Letter[] = ["A", "F", "T", "E", "R"];
  const target = "ANEAR";

  const expectedOutput = [
    { A: "correct" },
    { F: "absent" },
    { T: "absent" },
    { E: "present" },
    { R: "correct" },
  ];

  const result = checkWord(guess, target);

  expect(result).toEqual(expectedOutput);
});

test("Returns expected value based on input when guess is all incorrect", () => {
  const guess: Letter[] = ["D", "O", "U", "M", "S"];
  const target = "PARTY";

  const expectedOutput = [
    { D: "absent" },
    { O: "absent" },
    { U: "absent" },
    { M: "absent" },
    { S: "absent" },
  ];

  const result = checkWord(guess, target);

  expect(result).toEqual(expectedOutput);
});

test("Returns expected value based on input when guess has the right letters in the wrong order", () => {
  const guess: Letter[] = ["D", "O", "U", "M", "S"];
  const target = "SDOUM";

  const expectedOutput = [
    { D: "present" },
    { O: "present" },
    { U: "present" },
    { M: "present" },
    { S: "present" },
  ];

  const result = checkWord(guess, target);
  expect(result).toEqual(expectedOutput);
});

test("Returns expected value based on input when guess has duplicate letters, but the target does not. First of duplicates is in correct position.", () => {
  const guess: Letter[] = ["D", "O", "O", "M", "S"];
  const target = "DOUMS";

  const expectedOutput = [
    { D: "correct" },
    { O: "correct" },
    { O: "absent" },
    { M: "correct" },
    { S: "correct" },
  ];

  const result = checkWord(guess, target);

  expect(result).toEqual(expectedOutput);
});

test("Returns expected value based on input when guess has duplicate letters, but the target does not. First of the duplicates is not in the correct location and second duplicate is.", () => {
  const guess: Letter[] = ["T", "E", "A", "S", "E"];
  const target = "TASSE";

  const expectedOutput = [
    { T: "correct" },
    { E: "absent" },
    { A: "present" },
    { S: "correct" },
    { E: "correct" },
  ];

  const result = checkWord(guess, target);

  expect(result).toEqual(expectedOutput);
});

test("Returns expected value based on input when guess has duplicate letters, but the target does not. First of the duplicates is not in the correct location and second duplicate is.", () => {
  const guess: Letter[] = ["C", "R", "A", "S", "S"];
  const target = "MINKS";

  const expectedOutput = [
    { C: "absent" },
    { R: "absent" },
    { A: "absent" },
    { S: "absent" },
    { S: "correct" },
  ];

  const result = checkWord(guess, target);

  expect(result).toEqual(expectedOutput);
});

test("Returns expected value based on input when guess and target both have duplicate letters. First of the duplicates is not in the correct location and second duplicate is.", () => {
  const guess: Letter[] = ["C", "H", "E", "E", "R"];
  const target = "PEEPS";

  const expectedOutput = [
    { C: "absent" },
    { H: "absent" },
    { E: "correct" },
    { E: "present" },
    { R: "absent" },
  ];

  const result = checkWord(guess, target);

  expect(result).toEqual(expectedOutput);
});

test("Returns expected value based on input when guess and target both have duplicate letters. First of the duplicates is not in the correct location and second duplicate is.", () => {
  const guess: Letter[] = ["M", "A", "S", "K", "S"];
  const target = "SAKIS";

  const expectedOutput = [
    { M: "absent" },
    { A: "correct" },
    { S: "present" },
    { K: "present" },
    { S: "correct" },
  ];

  const result = checkWord(guess, target);

  expect(result).toEqual(expectedOutput);
});

test("Returns expected value based on input when guess has duplicate letters, but the target does not. Neither of the duplicates is in the correct location.", () => {
  const guess: Letter[] = ["A", "R", "E", "A", "S"];
  const target = "CLANG";

  const expectedOutput = [
    { A: "present" },
    { R: "absent" },
    { E: "absent" },
    { A: "absent" },
    { S: "absent" },
  ];

  const result = checkWord(guess, target);

  expect(result).toEqual(expectedOutput);
});
