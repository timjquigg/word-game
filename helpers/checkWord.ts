export default function checkWord(
  guess: Letter[],
  target: string
): LetterCheck[] {
  const responseObj: ResponseObject = {};

  // checkObj will contain keys for each letter that exists in the target word. The values will be indices of the target that those letters exist and the indices of the guess where that letter exists.
  const checkObj: Check = {};

  // Loop to populate the checkObj keys & target values
  for (let i = 0; i < target.length; i++) {
    if (Object.hasOwn(checkObj, target[i])) {
      checkObj[target[i] as Letter].target.push(i);
    } else {
      checkObj[target[i] as Letter] = { target: [i], guess: [] };
    }
  }

  // Loop to populate the checkObj guess values
  for (let i = 0; i < guess.length; i++) {
    if (Object.hasOwn(checkObj, guess[i])) {
      checkObj[guess[i]].guess.push(i);
    }
  }

  const used: number[] = [];

  // Loop through each letter in the checkObj and compare target values & guess values
  for (const letter of Object.keys(checkObj)) {
    // find all instances where the guess has a letter from the target at the same index
    for (const index of checkObj[letter].target) {
      if (checkObj[letter].guess.includes(index)) {
        responseObj[String(index)] = {};
        responseObj[String(index)][letter] = "correct";
        used.push(index);
      }
    }

    // find all instances where the guess has a letter from the target at a different index
    for (const index of checkObj[letter].target) {
      if (checkObj[letter].guess.includes(index) || used.includes(index)) {
        continue;
      }
      for (const guessIndex of checkObj[letter].guess) {
        if (!responseObj[String(guessIndex)]) {
          responseObj[String(guessIndex)] = {};
          responseObj[String(guessIndex)][letter] = "present";
          used.push(index);
          break;
        }
      }
    }
  }

  // Loop through the guess letters and if any are missing in the response object, add them as 'absent'
  const responseKeys = Object.keys(responseObj);
  for (const index in guess) {
    if (responseKeys.indexOf(index) < 0) {
      responseObj[index] = {};
      responseObj[index][guess[index]] = "absent";
    }
  }

  const response = Object.values(responseObj);

  return response;
}
