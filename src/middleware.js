import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

import { NextResponse } from 'next/server'
import squareWasm from './square.wasm?module'
 
export default async function middleware() {
  const m = await WebAssembly.instantiate(squareWasm)
  const answer = m.exports.square(9)
 
  const response = NextResponse.next()
  response.headers.set('x-square', answer.toString())
  return response
}

export default NextAuth(authConfig).auth;

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};