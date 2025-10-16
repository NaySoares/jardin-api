import { Product } from 'generated/prisma'
import { prisma } from 'lib/prisma'
import { injectable } from 'tsyringe'
import { IProductsRepository } from '../IProductsRepository'
import { ICreateProductDTO } from 'dtos/ICreateProductDTO'

@injectable()
class ProductsRepository implements IProductsRepository {
  findAll(): Promise<Product[]> {
    return prisma.product.findMany()
  }

  findById(id: number): Promise<Product | null> {
    return prisma.product.findUnique({
      where: { id },
    })
  }

  findByName(name: string): Promise<Product | null> {
    return prisma.product.findFirst({
      where: { name },
    })
  }

  async create({
    name,
    description,
    price,
    userId,
    stock,
    type,
  }: ICreateProductDTO): Promise<Product> {
    const product = await prisma.product.create({
      data: {
        stock,
        name,
        type,
        description,
        price,
        userId,
        updatedAt: new Date(),
      },
    })

    return product
  }
}

export { ProductsRepository }
