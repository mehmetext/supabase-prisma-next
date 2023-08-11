import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
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
  pages: {
    signIn: "/auth/login",
  },
});

export { handler as GET, handler as POST };
