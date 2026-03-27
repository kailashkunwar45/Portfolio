import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    status: "ready",
    message: "AI route is prepared. Integrate OpenAI/Claude here later.",
  });
}
