import { inject, injectable } from 'tsyringe'

import { IGardensRepository } from 'repositories/IGardensRepository'
import { Garden } from 'generated/prisma'

@injectable()
class ListAvailableGardensUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    @inject('IGardensRepository')
    private gardensRepository: IGardensRepository,
  ) {
    /* nothing */
  }

  async execute(): Promise<Garden[]> {
    const gardens = await this.gardensRepository.findAll()

    return gardens
  }
}

export { ListAvailableGardensUseCase }
