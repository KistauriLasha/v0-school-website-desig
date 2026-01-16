import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { compare } from "bcryptjs"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }
        const { email, password } = credentials;
        const user = await prisma.user.findUnique({ where: { email } });

        if (user && (await compare(password, user.password))) {
          return { id: user.id, name: user.name, email: user.email };
        } else {
          return null;
        }
      }
    })
  ],
  pages: {
    signIn: "/login",
  }
})

export { handler as GET, handler as POST }