import { ICreateProductDTO } from 'dtos/ICreateProductDTO'
import { Product } from 'generated/prisma'

interface IProductsRepository {
  findById(id: number): Promise<Product | null>
  findByName(name: string): Promise<Product | null>
  findAll(): Promise<Product[]>
  create({
    name,
    description,
    price,
    userId,
    stock,
    type,
  }: ICreateProductDTO): Promise<Product>
}

export { IProductsRepository }
