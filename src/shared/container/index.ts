import { IGardensRepository } from 'repositories/IGardensRepository'
import { GardensRepository } from 'repositories/infra/repositories/GardensRepository'
import { container } from 'tsyringe'

container.registerSingleton<IGardensRepository>(
  'IGardensRepository',
  GardensRepository,
)
