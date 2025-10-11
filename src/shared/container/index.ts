import { IGardensRepository } from 'repositories/infra/gardens/IGardensRepository'
import { GardensRepository } from 'repositories/infra/gardens/repositories/GardensRepository'
import { IProductsRepository } from 'repositories/infra/products/IProductsRepository'
import { ProductsRepository } from 'repositories/infra/products/repositories/ProductsRepository'
import { container } from 'tsyringe'

container.registerSingleton<IGardensRepository>(
  'IGardensRepository',
  GardensRepository,
)

container.registerSingleton<IProductsRepository>(
  'IProductsRepository',
  ProductsRepository,
)
