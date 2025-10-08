import {
  PrismaClient,
  UserType,
  GardenStatus,
  ProductType,
} from '../src/generated/prisma'

const prisma = new PrismaClient()

async function main() {
  console.log('🧹 Limpando tabelas...')
  await prisma.rental.deleteMany()
  await prisma.product.deleteMany()
  await prisma.garden.deleteMany()
  await prisma.user.deleteMany()

  console.log('🌱 Iniciando seed do banco...')

  // --- Usuários ---
  const owner = await prisma.user.create({
    data: {
      email: 'owner@example.com',
      name: 'Carlos Silva',
      passwordHash: 'hash123',
      type: UserType.OWNER,
    },
  })

  const producer = await prisma.user.create({
    data: {
      email: 'producer@example.com',
      name: 'Maria Oliveira',
      passwordHash: 'hash456',
      type: UserType.PRODUCER,
    },
  })

  const consumer = await prisma.user.create({
    data: {
      email: 'consumer@example.com',
      name: 'João Souza',
      passwordHash: 'hash789',
      type: UserType.CONSUMER,
    },
  })

  // --- Jardins ---
  const garden1 = await prisma.garden.create({
    data: {
      name: 'Jardim Primavera',
      description: 'Espaço ensolarado ideal para hortas pequenas.',
      latitude: -25.4284,
      longitude: -49.2733,
      status: GardenStatus.AVAILABLE,
      size: 25.5,
      price: 100.0,
      userId: owner.id,
    },
  })

  const garden2 = await prisma.garden.create({
    data: {
      name: 'Horta Verdejante',
      description: 'Área compartilhada próxima ao centro da cidade.',
      latitude: -25.43,
      longitude: -49.27,
      status: GardenStatus.RESERVED,
      size: 18.2,
      price: 80.0,
      userId: owner.id,
    },
  })

  // --- Produtos ---
  await prisma.product.createMany({
    data: [
      {
        name: 'Tomate Orgânico',
        description: 'Cultivado sem agrotóxicos.',
        price: 4.5,
        type: ProductType.VEGETABLE,
        stock: 50,
        userId: producer.id,
      },
      {
        name: 'Manjericão Fresco',
        description: 'Ideal para temperar molhos.',
        price: 2.0,
        type: ProductType.HERB,
        stock: 100,
        userId: producer.id,
      },
      {
        name: 'Maçã Gala',
        description: 'Fruta fresca e crocante.',
        price: 3.2,
        type: ProductType.FRUIT,
        stock: 75,
        userId: producer.id,
      },
    ],
  })

  // --- Aluguel ---
  await prisma.rental.create({
    data: {
      userApplicantId: consumer.id,
      message: 'Gostaria de alugar o espaço por 2 meses.',
      ownerId: owner.id,
      gardenId: garden1.id,
    },
  })

  console.log('✅ Seed concluído com sucesso!')
}

main()
  .catch((e) => {
    console.error('❌ Erro no seed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
