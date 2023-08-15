import { NextResponse } from "next/server";

export async function POST() {
  console.log("working...");
  return NextResponse.json({ status: "ok" });
}
