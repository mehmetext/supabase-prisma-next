import { prisma } from "@/lib/prisma";
import AllQuotes from "./AllQuotes";
import { User } from "@prisma/client";

export default async function ProfileAllQuotes({ user }: { user: User }) {
  const quotes = await prisma.quote.findMany({
    where: { userId: user.id },
    include: {
      user: true,
      quoteAndVote: {
        where: {
          userId: user?.id,
        },
      },
    },
    orderBy: [{ createdAt: "desc" }],
  });

  return <AllQuotes quotes={quotes} me={user} />;
}
