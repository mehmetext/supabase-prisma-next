import { prisma } from "@/lib/prisma";
import AllQuotes from "./AllQuotes";
import getCurrentUser from "@/lib/getCurrentUser";

export default async function HomeAllQuotes() {
  const quotes = await prisma.quote.findMany({
    include: { user: true },
    orderBy: [{ createdAt: "desc" }],
  });
  const user = await getCurrentUser();

  return <AllQuotes quotes={quotes} me={user} />;
}
