import { NextResponse } from "next/server";
import validate from "@/lib/validateWord";

export async function POST(req: Request) {
  // const key = process.env.DICTIONARY_KEY;
  const word = await req.json();
  console.log(word);
  const valid = await validate(word);
  return NextResponse.json({ valid });
}
