import { Garden } from 'generated/prisma'

interface IGardensRepository {
  // create(data: ICreateGardenDTO): Promise<Garden>
  // findById(id: string): Promise<Garden>
  // findAvailable(name?: string, status?: boolean): Promise<Garden[]>
  findAll(): Promise<Garden[]>
}

export { IGardensRepository }
