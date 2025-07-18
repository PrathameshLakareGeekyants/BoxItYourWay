import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "test@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = {
          id: "1",
          email: "test@example.com",
          password: "password123",
        };

        if (
          credentials?.email === user.email &&
          credentials?.password === user.password
        ) {
          const { password, ...userWithoutPassword } = user;
          return userWithoutPassword;
        }

        return null;
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin",
  },
});

export { handler as GET, handler as POST };
