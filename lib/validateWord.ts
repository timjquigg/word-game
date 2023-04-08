const KEY = process.env.DICTIONARY_KEY;

export default async function validate(word: string): Promise<boolean> {
  const res = await fetch(
    `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${KEY}
    `
  );

  const definition = await res.json();
  const valid = definition[0].hwi ? true : false;
  return valid;
}

export async function getDefinition(word: string): Promise<string> {
  const res = await fetch(
    `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${KEY}
    `
  );

  const json = await res.json();
  const definition = json[0].shortdef;

  return definition;
}
