import AllQuotes from "@/components/AllQuotes";
import ProfileInfo from "@/components/ProfileInfo";
import getCurrentUser from "@/lib/getCurrentUser";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params: { username },
}: {
  params: { username: string };
}): Promise<Metadata> {
  const user = await prisma.user.findUnique({ where: { username } });

  return {
    title: `${user?.name} - SP Next`,
  };
}

export default async function Profile({
  params: { username },
}: {
  params: { username: string };
}) {
  const me = await getCurrentUser();

  const [user, quotes] = await Promise.all([
    prisma.user.findUnique({ where: { username } }),
    prisma.quote.findMany({
      where: {
        user: { username: username },
      },
      include: {
        user: true,
        quoteAndVote: {
          where: {
            user: { username: me?.username },
          },
        },
      },
      orderBy: [{ createdAt: "desc" }],
    }),
  ]);

  if (!user) notFound();

  return (
    <>
      <ProfileInfo user={user} />
      <div className="flex flex-col w-full gap-2">
        <div className="text-3xl font-bold">Quotes</div>
        <AllQuotes quotes={quotes} me={me} />
      </div>
    </>
  );
}
