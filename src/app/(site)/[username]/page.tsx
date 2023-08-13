import { prisma } from "@/lib/prisma";
import { Metadata } from "next";

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

export default function Profile({
  params: { username },
}: {
  params: { username: string };
}) {
  return <div>{username}</div>;
}
