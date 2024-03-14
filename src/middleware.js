import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export default NextAuth(authConfig).auth;

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
	runtime: 'experimental-edge', // for Edge API Routes only
  unstable_allowDynamic: [
    // allows a single file
    '/lib/utilities.js',
    // use a glob to allow anything in the function-bind 3rd party module
    '/node_modules/mongoose/**',
  ],
};