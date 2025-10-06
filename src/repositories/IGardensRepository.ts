import { Garden } from 'generated/prisma'

interface IGardensRepository {
  findById(id: number): Promise<Garden | null>
  // findAvailable(name?: string, status?: boolean): Promise<Garden[]>
  findAll(): Promise<Garden[]>
}

export { IGardensRepository }
