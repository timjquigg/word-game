export default function checkWord(
  guess: Letter[],
  target: string
): LetterCheck[] {
  const targetArr = target.split("");
  const responseObj: ResponseObject = {};
  const guessOccurences: Occurences = {};
  const targetOccurences: Occurences = {};

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

  // Loop through each letter in the checkObj and compare target values & guess values
  for (const letter of Object.keys(checkObj)) {
    // Index for guess array
    let i = 0;
    for (const index of checkObj[letter].target) {
      // If the guess includes this letter at the same index
      if (checkObj[letter].guess.includes(index)) {
        responseObj[String(index)] = {};
        responseObj[String(index)][letter] = "correct";
        continue;
      }
      // If the guess includes this letter but at a different index
      if (checkObj[letter].guess.length > 0) {
        responseObj[String(checkObj[letter].guess[i])] = {};
        responseObj[String(checkObj[letter].guess[i])][letter] = "present";
        i++;
        continue;
      }
    }
  }

  const response = Object.values(responseObj);

  // If response is empty, then all guess letters are absent from target
  if (response.length === 0) {
    for (const letter of guess) {
      const addition: LetterCheck = {};
      addition[letter] = "absent";
      response.push(addition);
    }
  }

  // Loop through guess letters and see if at each index it matches the letter in the response array
  for (const index in guess) {
    if (typeof response[index] !== "undefined") {
      if (guess[index] !== Object.keys(response[index])[0]) {
        const addition: LetterCheck = {};
        addition[guess[index]] = "absent";
        response.splice(Number(index), 0, addition);
      }
    } else {
      const addition: LetterCheck = {};
      addition[guess[index]] = "absent";
      response.splice(Number(index), 0, addition);
    }
  }
  return response;
}
