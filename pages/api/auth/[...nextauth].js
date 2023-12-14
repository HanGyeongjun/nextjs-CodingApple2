import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: '5379868646cfcc28e4c1',
      clientSecret: 'a40022bd29a6ed806b2448a1b29b48a331905b8f',
    }),
  ],
  secret : 'halogenCodingApplePractice'
};
export default NextAuth(authOptions); 