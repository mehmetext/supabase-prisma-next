import { prisma } from "@/lib/prisma";
import AllQuotes from "./AllQuotes";
import getCurrentUser from "@/lib/getCurrentUser";
import Pagination from "./Pagination";

export default async function HomeAllQuotes({ page }: { page?: string }) {
  const user = await getCurrentUser();

  const limit = 6;

  const [quoteCount, quotes] = await prisma.$transaction([
    prisma.quote.count(),
    prisma.quote.findMany({
      take: limit,
      skip: limit * (isNaN(Number(page)) ? 0 : Number(page) - 1),
      include: {
        user: true,
        quoteAndVote: {
          where: {
            userId: user?.id,
          },
        },
      },
      orderBy: [{ createdAt: "desc" }],
    }),
  ]);

  return (
    <>
      <AllQuotes quotes={quotes} me={user} />
      <Pagination
        totalPages={Math.ceil(quoteCount / limit)}
        currentPage={isNaN(Number(page)) ? undefined : Number(page)}
      />
    </>
  );
}
