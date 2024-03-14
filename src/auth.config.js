import { connectDb } from "./lib/db";
import { User } from "./lib/models";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
        token.isAdmin = user.isAdmin
      }
      return token;
    },
    async session({ session, token }) {
      if (token){
        session.user.id = token.id;
        session.user.username = token.username;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
    authorized({ auth, request }) {
      const user = auth?.user;
      const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
      const isOnTeamPage = request.nextUrl?.pathname.startsWith("/team");
      const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");
      const isOnRegistrationPage = request.nextUrl?.pathname.startsWith("/registration");

        // ONLY ADMIN CAN REACH THE ADMIN DASHBOARD
        if (isOnAdminPanel && !user?.isAdmin) {
          return false;
        }
    
        // ONLY AUTHENTICATED USERS CAN REACH THE Team PAGE
        if (isOnTeamPage && !user) {
          return false;
        }


      // ONLY UNAUTHENTICATED USERS CAN REACH THE LOGIN PAGE
      if (isOnLoginPage && user) {
        return Response.redirect(new URL("/team", request.nextUrl));
      }
      if (isOnRegistrationPage && user) {
        return Response.redirect(new URL("/team", request.nextUrl));
      }

      console.log(auth);
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
};
