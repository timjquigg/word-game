import getAnswer from "@/lib/getAnswer";
import { getDefinition } from "@/lib/validateWord";
import { NextResponse } from "next/server";

export async function GET() {
  let valid = false;
  let word = await getAnswer();
  console.log(word[0]);
  const definition = await getDefinition(word[0]);
  console.log(definition);

  return NextResponse.json({ word, definition });
}
