import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListAvailableGardensUseCase } from 'use-cases/ListAvailableGardensUseCase'

class ListAvailableGardensController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAvailableGardensUseCase = container.resolve(
      ListAvailableGardensUseCase,
    )

    const gardens = await listAvailableGardensUseCase.execute()

    return response.json(gardens)
  }
}

export { ListAvailableGardensController }
