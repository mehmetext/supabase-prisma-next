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
        console.log(1);
        if (!(credentials?.username && credentials.password)) {
          console.log(2);
          throw new Error("Gerekli bilgiler girilmedi!");
        }

        console.log(3);
        const user = await prisma.user.findUnique({
          where: {
            username: credentials.username,
          },
        });

        if (!user) {
          console.log(4);
          throw new Error("Username or password incorrect!");
        }
        if (
          await bcrypt.compare(
            await bcrypt.hash(credentials.password, 12),
            user.hashedPassword
          )
        ) {
          console.log(5);
          throw new Error("Username or password incorrect!");
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  debug: process.env.NODE_ENV === "development",
  secret: process.env.NEXTAUTH_URL,
});

export { handler as GET, handler as POST };
