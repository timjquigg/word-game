interface Occurences {
  [letter: string]: number;
}

export default function checkWord(
  guess: string[],
  target: string
): LetterCheck[] {
  const targetArr = target.split("");
  const response: LetterCheck[] = [];
  const guessOccurences: Occurences = {};
  const targetOccurences: Occurences = {};
  guess.forEach((letter, index) => {
    guessOccurences[letter] = (guessOccurences[letter] ?? 0) + 1;
    targetOccurences[letter] = targetArr.filter((el) => el === letter).length;

    // If letter is in the right place
    if (targetArr[index] === letter) {
      const result: LetterCheck = {};
      result[letter] = "correct";
      response.push(result);
      return;
    }
    // If letter is not in word
    if (targetArr.indexOf(letter) < 0) {
      const result: LetterCheck = {};
      result[letter] = "absent";
      response.push(result);
      return;
    }

    // Letter in the word, but in wrong place

    // If this occurence of the letter in the guess is less than or equal to the total times it appears in the target
    if (guessOccurences[letter] <= targetOccurences[letter]) {
      const result: LetterCheck = {};
      result[letter] = "present";
      response.push(result);
      return;
    }

    // If this occurence of the letter in the guess is greater than the total times it appears in the target
    const result: LetterCheck = {};
    result[letter] = "absent";
    response.push(result);
    return;
  });
  return response;
}
