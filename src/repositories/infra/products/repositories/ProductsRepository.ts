import { Product } from 'generated/prisma'
import { prisma } from 'lib/prisma'
import { injectable } from 'tsyringe'
import { IProductsRepository } from '../IProductsRepository'

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
}

export { ProductsRepository }
