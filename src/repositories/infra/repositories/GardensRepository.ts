import { ICreateGardenDTO } from 'dtos/ICreateGardenDTO'
import { Garden } from 'generated/prisma'
import { prisma } from 'lib/prisma'
import { IGardensRepository } from 'repositories/IGardensRepository'
import { injectable } from 'tsyringe'

@injectable()
class GardensRepository implements IGardensRepository {
  findAll(): Promise<Garden[]> {
    return prisma.garden.findMany()
  }

  findById(id: number): Promise<Garden | null> {
    return prisma.garden.findUnique({
      where: { id },
    })
  }

  findByName(name: string): Promise<Garden | null> {
    return prisma.garden.findFirst({
      where: { name },
    })
  }

  async create({
    name,
    description,
    latitude,
    longitude,
    address,
    status,
    size,
    price,
    userId,
  }: ICreateGardenDTO): Promise<Garden> {
    const garden = await prisma.garden.create({
      data: {
        name,
        description,
        latitude,
        longitude,
        address,
        status,
        size,
        price,
        userId,
      },
    })

    return garden
  }
}

export { GardensRepository }
