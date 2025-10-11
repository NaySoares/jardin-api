import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateGardenUseCase } from 'use-cases/CreateGardenUseCase'

class CreateGardenController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      description,
      latitude,
      longitude,
      address,
      status,
      size,
      price,
    } = request.body
    const createGardenUseCase = container.resolve(CreateGardenUseCase)

    const garden = await createGardenUseCase.execute({
      name,
      description,
      latitude,
      longitude,
      address,
      status,
      size,
      price,
    })

    return response.status(201).json(garden)
  }
}

export { CreateGardenController }
