import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const exists = await prisma.quoteAndVote.count({
      where: {
        quoteId: data.quoteId,
        userId: data.userId,
      },
    });

    let quoteAndVote;

    if (exists) {
      quoteAndVote = await prisma.quoteAndVote.update({
        where: {
          quoteId_userId: { quoteId: data.quoteId, userId: data.userId },
        },
        data: {
          type: data.type,
        },
      });
    } else {
      quoteAndVote = await prisma.quoteAndVote.create({
        data: {
          quoteId: data.quoteId,
          userId: data.userId,
          type: data.type,
        },
      });
    }

    return NextResponse.json({ status: "ok", quoteAndVote });
  } catch (e) {}
}
