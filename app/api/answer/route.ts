import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    "https://random-word-api.herokuapp.com/word?length=5",
    { cache: "no-store" }
  );
  const word = await res.json();
  console.log(word);
  return NextResponse.json({ word });
}
