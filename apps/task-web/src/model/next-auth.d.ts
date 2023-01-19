import { Session, User } from "next-auth";

export type NextAuthUser = User & { id: string | undefined };

export type NextAuthSession = Omit<Session, "user"> & {
  idToken: string | undefined;
  user: NextAuthUser;
};
