import { NextAuthSession } from "@/model/next-auth";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authOptions: NextAuthOptions = {
  jwt: { maxAge: 7 * 24 * 60 * 60 },
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET ?? "",
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      if (user?.id) {
        token.user_id = user?.id;
      }
      if (account?.id_token) {
        token.idToken = account.id_token;
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.idToken) {
        (session as NextAuthSession).idToken = token.idToken as string;
      }
      if (session?.user) {
        (session as NextAuthSession).user.id = (token.user_id as string) ?? "";
      }
      return session;
    },
  },
};

export { authOptions };
