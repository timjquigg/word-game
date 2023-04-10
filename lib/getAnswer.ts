import validate from "./validateWord";

export default async function getAnswer(): Promise<string> {
  const word = await fetchAnswer();

  return word;
}

export const fetchAnswer = async (): Promise<string> => {
  // The random word api includes some words that are not in the dictionary. So random words must be validated against the dictionary being used for guesses
  let valid = false;

  while (!valid) {
    const res = await fetch(
      "https://random-word-api.herokuapp.com/word?length=5",
      { cache: "no-store" }
    );
    const word = await res.json();
    valid = await validate(word);
    if (valid) {
      return word;
    }
  }

  return "";
};
