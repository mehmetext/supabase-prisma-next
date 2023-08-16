import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const photo = formData.get("photo") as File;

  console.log(photo.name);

  return NextResponse.json({ status: "ok" });
}
