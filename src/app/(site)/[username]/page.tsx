import ProfileAllQuotes from "@/components/ProfileAllQuotes";
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

  const isMyProfile = () => user.id === me?.id;

  return (
    <>
      <ProfileInfo user={user} isMyProfile={isMyProfile()} />
      <ProfileAllQuotes quotes={quotes} me={me} />
    </>
  );
}
