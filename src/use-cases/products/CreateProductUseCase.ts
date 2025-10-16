import { inject, injectable } from 'tsyringe'
import { AppError } from '@shared/errors/AppError'
import { ICreateProductDTO } from 'dtos/ICreateProductDTO'
import { IProductsRepository } from 'repositories/infra/products/IProductsRepository'
import { Product, ProductType } from 'generated/prisma'

@injectable()
class CreateProductUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    @inject('IProductsRepository')
    private productsRepository: IProductsRepository,
  ) {
    /* nothing */
  }

  async execute({
    name,
    description,
    price,
    stock = 1,
    type,
    userId,
  }: ICreateProductDTO): Promise<Product> {
    const productAlreadyExists = await this.productsRepository.findByName(name)

    if (productAlreadyExists) {
      throw new AppError('Já existe um produto com esse nome!')
    }

    return this.productsRepository.create({
      name,
      description,
      price,
      stock,
      type: type || ProductType.FRUIT,
      userId: userId || 'default-user-id', // apenas para testes
    })
  }
}

export { CreateProductUseCase }
