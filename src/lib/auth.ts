import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import { PrismaClient } from '../generated/prisma'
import { compare, hash } from 'bcryptjs'

const prisma = new PrismaClient()
export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  trustedOrigins: ['http://localhost:3000'],
  emailAndPassword: {
    enabled: true,
    password: {
      hash: async (password) => {
        return await hash(password, 10)
      },
      verify: async ({ hash, password }) => {
        return await compare(password, hash)
      },
    },
  },
})
