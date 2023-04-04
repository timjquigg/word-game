import validate from "./validateWord";

export default async function getAnswer(): Promise<string> {
  const word = await fetchAnswer();

  return word;
}

const fetchAnswer = async (): Promise<string> => {
  let valid = false;

  while (!valid) {
    const res = await fetch(
      "https://random-word-api.herokuapp.com/word?length=5",
      { cache: "no-store" }
    );
    const word = await res.json();
    console.log(word);
    valid = await validate(word);
    if (valid) {
      return word;
    }
  }

  return "";
};
