import { NextResponse } from "next/server";
import validate from "@/lib/validateWord";

export async function POST(req: Request) {
  const word = await req.json();
  const valid = await validate(word);
  return NextResponse.json({ valid });
}
