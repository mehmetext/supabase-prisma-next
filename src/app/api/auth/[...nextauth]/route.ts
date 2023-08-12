import { prisma } from "@/lib/prisma";
import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "password", type: "password" },
      },
      authorize: async (credentials, req) => {
        if (!(credentials?.username && credentials.password)) {
          throw new Error("Gerekli bilgiler girilmedi!");
        }

        const user = await prisma.user.findUnique({
          where: {
            username: credentials.username,
          },
        });

        if (!user) throw new Error("Username or password incorrect!");
        if (await bcrypt.compare(credentials.password, user.hashedPassword))
          throw new Error("Username or password incorrect!");

        return user;
      },
    }),
  ],
  debug: process.env.NODE_ENV === "development",
  secret: process.env.NEXTAUTH_URL,
});

export { handler as GET, handler as POST };
