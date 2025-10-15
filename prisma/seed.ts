import { hash } from 'bcryptjs'
import { PrismaClient } from '../src/generated/prisma'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seeding...')

  // Limpando dados antigos
  await prisma.verification.deleteMany()
  await prisma.account.deleteMany()
  await prisma.session.deleteMany()
  await prisma.rental.deleteMany()
  await prisma.product.deleteMany()
  await prisma.garden.deleteMany()
  await prisma.user.deleteMany()

  // Hash básico de senha
  const passwordHash = await hash('123456789', 8)

  // Usuários base
  const owner = await prisma.user.create({
    data: {
      id: 'user_owner_1',
      name: 'Alice Green',
      email: 'alice@greenroots.com',
      passwordHash,
      type: 'OWNER',
      emailVerified: true,
    },
  })

  const producer = await prisma.user.create({
    data: {
      id: 'user_producer_1',
      name: 'Bob Farmer',
      email: 'bob@greenroots.com',
      passwordHash,
      type: 'PRODUCER',
      emailVerified: true,
    },
  })

  const consumer = await prisma.user.create({
    data: {
      id: 'user_consumer_1',
      name: 'Charlie Buyer',
      email: 'charlie@greenroots.com',
      passwordHash,
      type: 'CONSUMER',
      emailVerified: true,
    },
  })

  // Account vinculadas aos usuários
  await prisma.account.createMany({
    data: [
      {
        id: 'acc_owner',
        accountId: owner.email,
        providerId: 'credentials',
        userId: owner.id,
        password: passwordHash,
      },
      {
        id: 'acc_producer',
        accountId: producer.email,
        providerId: 'credentials',
        userId: producer.id,
        password: passwordHash,
      },
      {
        id: 'acc_consumer',
        accountId: consumer.email,
        providerId: 'credentials',
        userId: consumer.id,
        password: passwordHash,
      },
    ],
  })

  // Garden vinculado ao OWNER
  const garden = await prisma.garden.create({
    data: {
      name: 'Green Roots Garden',
      description: 'Um lindo jardim sustentável com ervas e hortaliças.',
      latitude: 12.3456,
      longitude: -45.6789,
      address: 'Rua Verde 123, Manaus-AM',
      status: 'AVAILABLE',
      size: 50.5,
      price: 200.0,
      userId: owner.id,
    },
  })

  // Produto vinculado ao PRODUCER
  const product = await prisma.product.create({
    data: {
      name: 'Organic Tomato',
      description: 'Tomate orgânico cultivado localmente.',
      price: 5.5,
      type: 'VEGETABLE',
      stock: 120,
      userId: producer.id,
    },
  })

  // Aluguel (Rental) — CONSUMER solicita jardim do OWNER
  await prisma.rental.create({
    data: {
      userApplicantId: 999, // Exemplo simbólico
      message: 'Gostaria de alugar por uma semana.',
      ownerId: owner.id,
      gardenId: garden.id,
    },
  })

  // Sessões simuladas
  const now = new Date()
  const future = new Date(now.getTime() + 1000 * 60 * 60 * 24) // +1 dia

  await prisma.session.createMany({
    data: [
      {
        id: 'sess_owner',
        token: 'token_owner_123',
        expiresAt: future,
        userId: owner.id,
      },
      {
        id: 'sess_producer',
        token: 'token_producer_123',
        expiresAt: future,
        userId: producer.id,
      },
      {
        id: 'sess_consumer',
        token: 'token_consumer_123',
        expiresAt: future,
        userId: consumer.id,
      },
    ],
  })

  console.log('✅ Seed completed successfully!')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
