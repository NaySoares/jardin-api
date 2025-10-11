import { inject, injectable } from 'tsyringe'

import { Product } from 'generated/prisma'
import { IProductsRepository } from 'repositories/infra/products/IProductsRepository'

@injectable()
class ListAvailableProductsUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    @inject('IProductsRepository')
    private productsRepository: IProductsRepository,
  ) {
    /* nothing */
  }

  async execute(): Promise<Product[]> {
    const products = await this.productsRepository.findAll()

    return products
  }
}

export { ListAvailableProductsUseCase }
