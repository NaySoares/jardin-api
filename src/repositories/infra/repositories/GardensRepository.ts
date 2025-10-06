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
}

export { GardensRepository }
