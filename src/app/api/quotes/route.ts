import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();

  const quote = await prisma.quote.create({
    data: {
      quote: data.quote,
      userId: data.userId,
    },
  });

  return NextResponse.json({ status: "ok", quote });
}
