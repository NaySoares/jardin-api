import { Product } from 'generated/prisma'

interface IProductsRepository {
  findById(id: number): Promise<Product | null>
  findByName(name: string): Promise<Product | null>
  findAll(): Promise<Product[]>
}

export { IProductsRepository }
