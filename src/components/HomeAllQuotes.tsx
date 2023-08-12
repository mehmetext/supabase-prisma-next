import { prisma } from "@/lib/prisma";
import AllQuotes from "./AllQuotes";

export default async function HomeAllQuotes() {
  const quotes = await prisma.quote.findMany({
    include: { user: true },
    orderBy: [{ createdAt: "desc" }],
  });

  return <AllQuotes quotes={quotes} />;
}
