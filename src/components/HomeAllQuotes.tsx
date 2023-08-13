import { prisma } from "@/lib/prisma";
import AllQuotes from "./AllQuotes";
import getCurrentUser from "@/lib/getCurrentUser";

export default async function HomeAllQuotes() {
  const user = await getCurrentUser();

  const quotes = await prisma.quote.findMany({
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
