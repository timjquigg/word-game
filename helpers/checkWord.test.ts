import checkWord from "./checkWord";

test("Returns expected value based on input when guess is correct", () => {
  const guess = ["D", "O", "U", "M", "S"];
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

test("Returns expected value based on input when guess is all incorrect", () => {
  const guess = ["D", "O", "U", "M", "S"];
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
  const guess = ["D", "O", "U", "M", "S"];
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

test("Returns expected value based on input when guess has duplicate letters, one in the correct spot and one in the incorrect spot", () => {
  const guess = ["O", "D", "O", "R", "S"];
  const target = "DOORS";

  const expectedOutput = [
    { O: "present" },
    { D: "present" },
    { O: "correct" },
    { R: "correct" },
    { S: "correct" },
  ];

  const result = checkWord(guess, target);

  expect(result).toEqual(expectedOutput);
});

test("Returns expected value based on input when guess has duplicate letters, but the target does not", () => {
  const guess = ["D", "O", "O", "M", "S"];
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

test("Returns expected value based on input when guess has duplicate letters, but the target does not", () => {
  const guess = ["D", "O", "O", "M", "S"];
  const target = "HOWFF";

  const expectedOutput = [
    { D: "absent" },
    { O: "correct" },
    { O: "absent" },
    { M: "absent" },
    { S: "absent" },
  ];

  const result = checkWord(guess, target);

  expect(result).toEqual(expectedOutput);
});
