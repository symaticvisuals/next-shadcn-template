import { NextAuthOptions, getServerSession } from "next-auth";
import axios from "axios";

import GoogleProvider from "next-auth/providers/google";
import { nanoid } from "nanoid";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/sign-in",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
        session.user.username = token.username;
      }
      return session;
    },
    async jwt({ token, user }) {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth`,
        {
          idToken: token.idToken,
        }
      );
      if (data) {
        return data;
      }
    },
    redirect() {
      return "/";
    },
  },
};

export const getAuthSession = () => getServerSession(authOptions);
