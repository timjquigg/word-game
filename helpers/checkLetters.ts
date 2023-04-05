export default function checkLetters(
  attempt: LetterCheck[],
  keys: LetterCheck
): LetterCheck {
  const updatedKeys: LetterCheck = {};

  attempt.forEach((letter, index) => {
    if (Object.values(letter)[0] === "present") {
      if (keys[Object.keys(letter)[0]] !== "correct") {
        updatedKeys[Object.keys(letter)[0]] = "present";
        return;
      }
    }
    if (Object.values(letter)[0] === "correct") {
      updatedKeys[Object.keys(letter)[0]] = "correct";
      return;
    }
  });
  return updatedKeys;
}
