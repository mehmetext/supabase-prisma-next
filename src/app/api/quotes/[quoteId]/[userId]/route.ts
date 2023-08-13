import { prisma } from "@/lib/prisma";
import { Quote, QuoteAndVote, VoteType } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest,
  {
    params: { quoteId, userId },
  }: { params: { quoteId: string; userId: string } }
) {
  try {
    const { type, currentType }: { type: VoteType; currentType: VoteType } =
      await req.json();

    let quoteAndVote!: QuoteAndVote | null, quote!: Quote | null;

    console.log(1);

    if (currentType) {
      console.log(2);
      const updateType = currentType === type ? "NONE" : type;
      const scoreChange =
        currentType === type
          ? type === "UP"
            ? -1
            : 1
          : currentType !== "NONE"
          ? type === "UP"
            ? 2
            : -2
          : type === "UP"
          ? 1
          : -1;

      [quoteAndVote, quote] = await prisma.$transaction([
        prisma.quoteAndVote.update({
          where: {
            quoteId_userId: { quoteId: quoteId, userId: userId },
          },
          data: {
            type: updateType,
          },
        }),
        updateQuoteScore(quoteId, scoreChange),
      ]);
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
