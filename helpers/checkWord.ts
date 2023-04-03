export default function checkWord(
  guess: string[],
  target: string
): LetterCheck[] {
  const targetArr = target.split("");
  const response: LetterCheck[] = [];
  guess.forEach((letter, index) => {
    if (targetArr[index] === letter) {
      const result: LetterCheck = {};
      result[letter] = "correct";
      response.push(result);
      return;
    }
    if (targetArr.indexOf(letter) < 0) {
      const result: LetterCheck = {};
      result[letter] = "absent";
      response.push(result);
      return;
    }
    const result: LetterCheck = {};
    result[letter] = "present";
    response.push(result);
    return;
  });
  return response;
}
