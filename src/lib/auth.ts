import { db } from "@/lib/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

function getGoogleCredentials(): { clientId: string; clientSecret: string } {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  if (!clientId || clientId.length === 0) {
    throw new Error("Missing GOOGLE_CLIENT_ID");
  }

  if (!clientSecret || clientSecret.length === 0) {
    throw new Error("Missing GOOGLE_CLIENT_SECRET");
  }

  return { clientId, clientSecret };
}

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    GoogleProvider({
      clientId: getGoogleCredentials().clientId,
      clientSecret: getGoogleCredentials().clientSecret,
    }),
  ],
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
      }

      return session;
    },
    async jwt({ token, user }) {
      const dbUser = await db.user.findFirst({
        where: {
          email: token.email,
        },
      });

      if (!dbUser) {
        token.id = user!.id;
        return token;
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
      };
    },
    redirect() {
      return "/";
    },
  },
};
// import { db } from "@/lib/db";

// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import { NextAuthOptions } from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// // import { prisma } from "@/service/db/client";

// import { PrismaClient } from "@prisma/client";

// // declare global {
// //   // eslint-disable-next-line no-var, no-unused-vars
// //   var cachedPrisma: PrismaClient;
// // }

// // let prisma: PrismaClient;
// // if (process.env.NODE_ENV === "production") {
// //   prisma = new PrismaClient();
// // } else {
// //   if (!global.cachedPrisma) {
// //     global.cachedPrisma = new PrismaClient();
// //   }
// //   prisma = global.cachedPrisma;
// // }
// function getGoogleCredentials(): { clientId: string; clientSecret: string } {
//   const clientId = process.env.GOOGLE_CLIENT_ID;
//   const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
//   if (!clientId || clientId.length === 0) {
//     throw new Error("Missing GOOGLE_CLIENT_ID");
//   }

//   if (!clientSecret || clientSecret.length === 0) {
//     throw new Error("Missing GOOGLE_CLIENT_SECRET");
//   }

//   return { clientId, clientSecret };
// }

// export const authOptions: NextAuthOptions = {
//   secret: process.env.NEXTAUTH_SECRET,
//   adapter: PrismaAdapter(db),
//   session: {
//     strategy: "jwt",
//   },
//   pages: {
//     signIn: "/",
//   },
//   providers: [
//     GoogleProvider({
//       clientId: getGoogleCredentials().clientId,
//       clientSecret: getGoogleCredentials().clientSecret,
//     }),
//   ],
//   callbacks: {
//     async session({ token, session }) {
//       try {
//         if (token) {
//           session.user.id = token.id;
//           session.user.name = token.name;
//           session.user.email = token.email;
//           session.user.image = token.picture;
//         }

//         return session;
//       } catch (error) {
//         console.error("Error in session callback: ", error);
//         throw error;
//       }
//     },
//     async jwt({ token, user }) {
//       try {
//         const dbUser = await db.user.findFirst({
//           where: {
//             email: token.email,
//           },
//         });

//         if (!dbUser) {
//           token.id = user!.id;
//           return token;
//         }

//         return {
//           id: dbUser.id,
//           name: dbUser.name,
//           email: dbUser.email,
//           picture: dbUser.image,
//         };
//       } catch (error) {
//         console.error("Error in jwt callback: ", error);
//         throw error;
//       }
//     },
//     redirect() {
//       return "/";
//     },
//   },
// };
