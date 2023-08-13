import ProfileInfo from "@/components/ProfileInfo";
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
  const user = await prisma.user.findUnique({ where: { username } });

  if (!user) notFound();

  return (
    <>
      <ProfileInfo user={user} />
    </>
  );
}
