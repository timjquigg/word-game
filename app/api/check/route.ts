import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const key = process.env.DICTIONARY_KEY;
  const word = await req.json();
  const res = await fetch(
    `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${key}
    `,
    { cache: "no-store" }
  );

  const definition = await res.json();
  const valid = definition[0].hwi ? true : false;
  return NextResponse.json({ valid });
}
