import { Product } from "generated/prisma";
import { prisma } from "lib/prisma";
import { injectable } from "tsyringe";
import { IProductsRepository } from "../IProductsRepository";
import { ICreateProductDTO } from "dtos/ICreateProductDTO";

@injectable()
class ProductsRepository implements IProductsRepository {
  findAll(): Promise<Product[]> {
    return prisma.product.findMany();
  }

  findById(id: number): Promise<Product | null> {
    return prisma.product.findUnique({
      where: { id },
    });
  }

  findByName(name: string): Promise<Product | null> {
    return prisma.product.findFirst({
      where: { name },
    });
  }

  async create({
    name,
    description,
    price,
    userId,
  }: ICreateProductDTO): Promise<Product> {
    return await prisma.product.create({
      name,
      description,
      price,
      userId,
    });
  }
}

export { ProductsRepository };
