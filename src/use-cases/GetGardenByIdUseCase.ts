import { inject, injectable } from 'tsyringe'

import { IGardensRepository } from 'repositories/IGardensRepository'
import { Garden } from 'generated/prisma'

@injectable()
class GetGardenByIdUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    @inject('IGardensRepository')
    private gardensRepository: IGardensRepository,
  ) {
    /* nothing */
  }

  async execute(id: number): Promise<Garden | null> {
    const garden = await this.gardensRepository.findById(id)

    return garden
  }
}

export { GetGardenByIdUseCase }
