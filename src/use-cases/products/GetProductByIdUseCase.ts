import { inject, injectable } from 'tsyringe'

import { Product } from 'generated/prisma'
import { IProductsRepository } from 'repositories/infra/products/IProductsRepository'

@injectable()
class GetProductByIdUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    @inject('IProductsRepository')
    private productsRepository: IProductsRepository,
  ) {
    /* nothing */
  }

  async execute(id: number): Promise<Product | null> {
    const product = await this.productsRepository.findById(id)

    return product
  }
}

export { GetProductByIdUseCase }
