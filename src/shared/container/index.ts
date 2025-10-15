import { IAccountsRepository } from 'repositories/infra/accounts/IAccountsRepository'
import { AccountsRepository } from 'repositories/infra/accounts/repositories/AccountsRepository'
import { IGardensRepository } from 'repositories/infra/gardens/IGardensRepository'
import { GardensRepository } from 'repositories/infra/gardens/repositories/GardensRepository'
import { IProductsRepository } from 'repositories/infra/products/IProductsRepository'
import { ProductsRepository } from 'repositories/infra/products/repositories/ProductsRepository'
import { IUsersRepository } from 'repositories/infra/users/IUsersRepository'
import { UsersRepository } from 'repositories/infra/users/repositories/UsersRepository'
import { container } from 'tsyringe'

container.registerSingleton<IGardensRepository>(
  'IGardensRepository',
  GardensRepository,
)

container.registerSingleton<IProductsRepository>(
  'IProductsRepository',
  ProductsRepository,
)

container.registerSingleton<IUsersRepository>(
  'IUsersRepository',
  UsersRepository,
)

container.registerSingleton<IAccountsRepository>(
  'IAccountsRepository',
  AccountsRepository,
)
