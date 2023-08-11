import { getServerSession } from "next-auth";
import { prisma } from "./prisma";

export default async function getCurrentUser() {
  const session = await getServerSession();

  if (!(session && session.user && session.user.email)) return null;

  return await prisma.user.findUnique({
    where: { email: session.user.email },
  });
}
