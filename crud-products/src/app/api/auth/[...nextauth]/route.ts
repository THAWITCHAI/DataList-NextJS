import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch("http://localhost:3000/api/login-user", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const response = await res.json();

        if (res.ok && response) {
          return response;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/Login",
    signOut: "/",
    error:'/components/Error'
  },
});

export { handler as GET, handler as POST };
