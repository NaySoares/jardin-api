import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { GetGardenByIdUseCase } from 'use-cases/GetGardenByIdUseCase'

class GetGardenByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    if (!id) {
      return response.status(400).json({ message: 'ID é obrigatório' })
    }

    const getGardenByIdUseCase = container.resolve(GetGardenByIdUseCase)

    const garden = await getGardenByIdUseCase.execute(Number(id))

    return response.json(garden)
  }
}

export { GetGardenByIdController }
