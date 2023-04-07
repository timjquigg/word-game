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

  // console.log(checkObj);

  // Loop through each letter in the checkObj and compare target values & guess values
  for (const letter of Object.keys(checkObj)) {
    // console.log(letter);
    let i = 0;
    for (const index of checkObj[letter].target) {
      // Index for guess array

      // console.log(index);

      // If the guess includes this letter at the same index
      if (checkObj[letter].guess.includes(index)) {
        responseObj[String(index)] = {};
        responseObj[String(index)][letter] = "correct";
        continue;
        // console.log(response[String(index)]);

        // If the guess includes this letter but at a different index
      }
      if (checkObj[letter].guess.length > 0) {
        responseObj[String(checkObj[letter].guess[i])] = {};
        responseObj[String(checkObj[letter].guess[i])][letter] = "present";
        i++;
        continue;
      }
    }
  }

  const response = Object.values(responseObj);

  if (response.length === 0) {
    for (const letter of guess) {
      const addition: LetterCheck = {};
      addition[letter] = "absent";
      response.push(addition);
    }
  }

  // Loop through response and see if any letters from the guess are missing
  for (const index in response) {
    const letter = Object.keys(response[index])[0];
    // If the current letter isn't the same as the letter in the guess at the same index, then the letter from the guess is missing in the response
    if (letter !== guess[index]) {
      const addition: LetterCheck = {};
      addition[guess[index]] = "absent";
      response.splice(Number(index), 0, addition);
    }
  }
  console.log(response);
  return response;
}

// guess.forEach((letter, index) => {
//   guessOccurences[letter] = (guessOccurences[letter] ?? 0) + 1;
//   targetOccurences[letter] = targetArr.filter((el) => el === letter).length;

//   // If letter is in the right place
//   if (targetArr[index] === letter) {
//     const result: LetterCheck = {};
//     result[letter] = "correct";
//     response[index] = result;
//     return;
//   }

//   // If letter is not in target
//   if (targetArr.indexOf(letter) < 0) {
//     const result: LetterCheck = {};
//     result[letter] = "absent";
//     response[index] = result;
//     return;
//   }

//   // If letter is in target but in incorrect place
//   if (targetArr.indexOf(letter) !== index) {
//     if (guessOccurences[letter] <= targetOccurences[letter]) {
//       const result: LetterCheck = {};
//       result[letter] = "present";
//       response[index] = result;
//       return;
//     } else {
//       // If this occurence of the letter in the guess is greater than the total times it appears in the target
//       const result: LetterCheck = {};
//       result[letter] = "absent";
//       response[index] = result;
//       return;
//     }
//   }
// });

// const duplicateErrors: DuplicateError = {};
// guess.forEach((letter, index) => {
//   if (
//     guessOccurences[letter] > targetOccurences[letter] &&
//     targetOccurences[letter] > 0
//   ) {
//     if (duplicateErrors[letter]) {
//       duplicateErrors[letter].push(index);
//     } else {
//       duplicateErrors[letter] = [index];
//     }
//   }
// });

// if (Object.keys(duplicateErrors).length > 0) {
//   Object.keys(duplicateErrors).forEach((letter) => {
//     // console.log(duplicateErrors[letter as Letter]);
//     duplicateErrors[letter].forEach((index) => {
//       console.log(response[index]);
//     });
//   });
// }
