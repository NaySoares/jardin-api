import { ICreateGardenDTO } from 'dtos/ICreateGardenDTO'
import { Garden } from 'generated/prisma'

interface IGardensRepository {
  findById(id: number): Promise<Garden | null>
  findByName(name: string): Promise<Garden | null>
  findAll(): Promise<Garden[]>
  create(data: ICreateGardenDTO): Promise<Garden>
}

export { IGardensRepository }
