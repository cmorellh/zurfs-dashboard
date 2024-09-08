import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

// Log environment variables to check their values
// console.log("NEXTAUTH_URL:", process.env.NEXTAUTH_URL);
// console.log("NEXT_PUBLIC_BASE_PATH:", process.env.NEXT_PUBLIC_BASE_PATH);

export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};