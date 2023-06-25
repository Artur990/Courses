import { NextAuthOptions } from "next-auth";
import { db } from "./db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";

function getGoogleCredential() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

  if (!clientId || clientId.length === 0) {
    throw new Error("no clintID for google ");
  }
  if (!clientSecret || clientSecret.length === 0) {
    throw new Error("no clientSecret for google ");
  }
  return {
    clientId,
    clientSecret,
  };
}
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    GoogleProvider({
      //   clientId: process.env.GOOGLE_CLIENT_ID,
      clientId: getGoogleCredential().clientId,
      clientSecret: getGoogleCredential().clientSecret,
      //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id;
        session.user?.name = token.name;
        session.user?.email = token.image;
        session.user?.image = token.image;
      }
      return session;
    },
  },
};
