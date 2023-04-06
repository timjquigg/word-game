export default function checkLetters(
  attempt: LetterCheck[],
  keys: LetterCheck
): LetterCheck {
  const updatedKeys: LetterCheck = { ...keys };

  attempt.forEach((letter, index) => {
    if (Object.values(letter)[0] === "correct") {
      updatedKeys[Object.keys(letter)[0]] = "correct";
      return;
    }

    if (Object.values(letter)[0] === "present") {
      if (keys[Object.keys(letter)[0]] !== "correct") {
        updatedKeys[Object.keys(letter)[0]] = "present";
        return;
      }
    }

    if (keys[Object.keys(letter)[0]] === null) {
      updatedKeys[Object.keys(letter)[0]] = "absent";
    }
  });
  return updatedKeys;
}
