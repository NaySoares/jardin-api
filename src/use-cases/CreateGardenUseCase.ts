import { inject, injectable } from 'tsyringe'

import { AppError } from '@shared/errors/AppError'
import { ICreateGardenDTO } from 'dtos/ICreateGardenDTO'
import { Garden, GardenStatus } from 'generated/prisma'
import { IGardensRepository } from 'repositories/IGardensRepository'

@injectable()
class CreateGardenUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    @inject('IGardensRepository')
    private gardensRepository: IGardensRepository,
  ) {
    /* nothing */
  }

  async execute({
    name,
    description,
    latitude,
    longitude,
    address,
    status = GardenStatus.AVAILABLE,
    size,
    price,
  }: ICreateGardenDTO): Promise<Garden> {
    const gardenAlreadyExists = await this.gardensRepository.findByName(name)

    if (gardenAlreadyExists) {
      throw new AppError('Já existe um jardim com esse nome!')
    }

    if (
      status &&
      !Object.values(GardenStatus).includes(status as GardenStatus)
    ) {
      throw new AppError(
        `Status inválido. Os status válidos são: ${Object.values(
          GardenStatus,
        ).join(', ')}`,
      )
    }

    return this.gardensRepository.create({
      name,
      description,
      latitude,
      longitude,
      address,
      status,
      size,
      price,
      userId: 1, // TODO: pegar o userId do usuário autenticado
    })
  }
}

export { CreateGardenUseCase }
