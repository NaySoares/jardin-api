import { PrismaClient } from '../src/generated/prisma'
import { randomUUID } from 'crypto'

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

  // Cria usuários
  const ownerId = randomUUID()
  const producerId = randomUUID()
  const consumerId = randomUUID()

  await prisma.user.createMany({
    data: [
      {
        id: ownerId,
        name: 'Alice Jardim',
        email: 'owner@example.com',
        emailVerified: true,
        type: 'OWNER',
        passwordHash: 'hashedpassword1',
      },
      {
        id: producerId,
        name: 'Bruno Agricultor',
        email: 'producer@example.com',
        emailVerified: true,
        type: 'PRODUCER',
        passwordHash: 'hashedpassword2',
      },
      {
        id: consumerId,
        name: 'Carla Consumidora',
        email: 'consumer@example.com',
        emailVerified: true,
        type: 'CONSUMER',
        passwordHash: 'hashedpassword3',
      },
    ],
  })

  // Cria 5 jardins
  await prisma.garden.createMany({
    data: [
      {
        name: 'Jardim Primavera',
        description: 'Espaço ensolarado ideal para cultivo de flores e ervas.',
        latitude: -1.4558,
        longitude: -48.4902,
        address: 'Rua das Flores, 123 - Belém, PA',
        status: 'AVAILABLE',
        size: 120.5,
        price: 150.0,
        userId: ownerId,
      },
      {
        name: 'Horta da Colina',
        description: 'Pequeno terreno fértil com ótima drenagem.',
        latitude: -1.4601,
        longitude: -48.4807,
        address: 'Av. das Palmeiras, 45 - Belém, PA',
        status: 'AVAILABLE',
        size: 80.0,
        price: 100.0,
        userId: ownerId,
      },
      {
        name: 'Sítio Raízes',
        description: 'Espaço amplo e com sombra parcial, ideal para legumes.',
        latitude: -1.4522,
        longitude: -48.4955,
        address: 'Travessa das Mangueiras, 201 - Belém, PA',
        status: 'RESERVED',
        size: 200.0,
        price: 250.0,
        userId: ownerId,
      },
      {
        name: 'Cantinho Verde',
        description: 'Área pequena e aconchegante, perfeita para ervas.',
        latitude: -1.4589,
        longitude: -48.4822,
        address: 'Rua João Balieiro, 50 - Belém, PA',
        status: 'AVAILABLE',
        size: 60.0,
        price: 80.0,
        userId: ownerId,
      },
      {
        name: 'Jardim das Árvores',
        description: 'Espaço arborizado, ideal para descanso e cultivo leve.',
        latitude: -1.4572,
        longitude: -48.488,
        address: 'Av. Castanheira, 987 - Belém, PA',
        status: 'RESERVED',
        size: 150.0,
        price: 180.0,
        userId: ownerId,
      },
    ],
  })

  // Cria 10 produtos
  await prisma.product.createMany({
    data: [
      {
        name: 'Tomate Orgânico',
        description: 'Tomates frescos e suculentos cultivados sem agrotóxicos.',
        price: 6.5,
        type: 'VEGETABLE',
        stock: 50,
        userId: producerId,
      },
      {
        name: 'Manjericão Fresco',
        description: 'Erva aromática ideal para temperos e molhos.',
        price: 3.2,
        type: 'HERB',
        stock: 100,
        userId: producerId,
      },
      {
        name: 'Alface Crespa',
        description: 'Folhas crocantes e frescas direto da horta.',
        price: 4.0,
        type: 'VEGETABLE',
        stock: 80,
        userId: producerId,
      },
      {
        name: 'Manga Palmer',
        description: 'Mangas doces e de polpa amarelada.',
        price: 5.5,
        type: 'FRUIT',
        stock: 60,
        userId: producerId,
      },
      {
        name: 'Cebolinha Verde',
        description: 'Erva fresca para temperos e guarnições.',
        price: 2.5,
        type: 'HERB',
        stock: 90,
        userId: producerId,
      },
      {
        name: 'Cenoura Orgânica',
        description: 'Rica em betacaroteno e saborosa.',
        price: 4.8,
        type: 'VEGETABLE',
        stock: 70,
        userId: producerId,
      },
      {
        name: 'Banana Nanica',
        description: 'Doce e nutritiva, perfeita para o café da manhã.',
        price: 3.0,
        type: 'FRUIT',
        stock: 120,
        userId: producerId,
      },
      {
        name: 'Alecrim',
        description: 'Erva aromática com propriedades medicinais.',
        price: 3.5,
        type: 'HERB',
        stock: 50,
        userId: producerId,
      },
      {
        name: 'Abacate Manteiga',
        description: 'Fruta cremosa e rica em gorduras boas.',
        price: 7.0,
        type: 'FRUIT',
        stock: 40,
        userId: producerId,
      },
      {
        name: 'Pepino Japonês',
        description: 'Fresco e crocante, ideal para saladas.',
        price: 4.3,
        type: 'VEGETABLE',
        stock: 65,
        userId: producerId,
      },
    ],
  })

  console.log('🌱 Seed criada com sucesso!')
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
