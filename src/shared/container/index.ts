import { IAccountsRepository } from 'repositories/infra/accounts/IAccountsRepository'
import { AccountsRepository } from 'repositories/infra/accounts/repositories/AccountsRepository'
import { IGardensRepository } from 'repositories/infra/gardens/IGardensRepository'
import { GardensRepository } from 'repositories/infra/gardens/repositories/GardensRepository'
import { IProductsRepository } from 'repositories/infra/products/IProductsRepository'
import { ProductsRepository } from 'repositories/infra/products/repositories/ProductsRepository'
import { ISessionsRepository } from 'repositories/infra/sessions/ISessionsRepository'
import { SessionsRepository } from 'repositories/infra/sessions/repositories/SessionsRepository'
import { IUsersRepository } from 'repositories/infra/users/IUsersRepository'
import { UsersRepository } from 'repositories/infra/users/repositories/UsersRepository'
import { container } from 'tsyringe'

import '@shared/container/providers'

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

container.registerSingleton<ISessionsRepository>(
  'ISessionsRepository',
  SessionsRepository,
)
