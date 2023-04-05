import getAnswer from "@/lib/getAnswer";
import validate from "@/lib/validateWord";
import { NextResponse } from "next/server";

export async function GET() {
  let valid = false;
  let word = await getAnswer();

  return NextResponse.json({ word });
}
