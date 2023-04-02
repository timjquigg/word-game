type letterCheck = {
  [key: string]: "correct" | "absent" | "present";
};

export default function checkWord(
  guess: string,
  target: string
): letterCheck[] {
  const guessArr = guess.split("");
  const targetArr = target.split("");
  const response: letterCheck[] = [];
  guessArr.forEach((letter, index) => {
    if (targetArr[index] === letter) {
      const result: letterCheck = {};
      result[letter] = "correct";
      response.push(result);
      return;
    }
    if (targetArr.indexOf(letter) < 0) {
      const result: letterCheck = {};
      result[letter] = "absent";
      response.push(result);
      return;
    }
    const result: letterCheck = {};
    result[letter] = "present";
    response.push(result);
    return;
  });
  console.log(response);
  return response;
}
