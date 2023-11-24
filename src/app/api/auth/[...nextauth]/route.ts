import NextAuth from 'next-auth/next';

import { options } from '@/utils/nextauth/option';

const handler = NextAuth(options);

export { handler as GET, handler as POST };
