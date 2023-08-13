import { prisma } from "@/lib/prisma";
import { Quote, QuoteAndVote, VoteType } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest,
  {
    params: { quoteId, userId },
  }: { params: { quoteId: string; userId: string } }
) {
  console.log(0);
  return NextResponse.json({ result: "ok" });
  try {
    console.log(1);
    const { type }: { type: VoteType } = await req.json();

    console.log(2);
    const exists = await prisma.quoteAndVote.findUnique({
      where: { quoteId_userId: { quoteId: quoteId, userId: userId } },
    });

    let quoteAndVote!: QuoteAndVote | null, quote!: Quote | null;

    if (exists) {
      console.log(3);

      if (exists.type !== type) {
        console.log(4);

        [quoteAndVote, quote] = await prisma.$transaction([
          prisma.quoteAndVote.update({
            where: {
              quoteId_userId: { quoteId: quoteId, userId: userId },
            },
            data: {
              type: type,
            },
          }),
          updateQuoteScore(quoteId, type === "UP" ? 2 : -2),
        ]);
      } else {
        console.log(5);
        [quoteAndVote, quote] = await prisma.$transaction([
          prisma.quoteAndVote.update({
            where: {
              quoteId_userId: { quoteId: quoteId, userId: userId },
            },
            data: {
              type: "NONE",
            },
          }),
          updateQuoteScore(quoteId, type === "UP" ? -1 : 1),
        ]);
      }
    } else {
      console.log(6);
      [quoteAndVote, quote] = await prisma.$transaction([
        prisma.quoteAndVote.create({
          data: {
            quoteId: quoteId,
            userId: userId,
            type: type,
          },
        }),
        updateQuoteScore(quoteId, type === "UP" ? 1 : -1),
      ]);
    }

    console.log(7);
    return NextResponse.json({
      status: "ok",
      quoteAndVote: quoteAndVote,
      score: quote?.score,
    });
  } catch (e) {}
}

function updateQuoteScore(quoteId: string, count: number) {
  return prisma.quote.update({
    where: { id: quoteId },
    data: {
      score: {
        increment: count,
      },
    },
  });
}
