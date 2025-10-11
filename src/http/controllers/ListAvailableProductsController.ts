import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListAvailableProductsUseCase } from 'use-cases/ListAvailableProductsUseCase'

class ListAvailableProductsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAvailableProductsUseCase = container.resolve(
      ListAvailableProductsUseCase,
    )

    const products = await listAvailableProductsUseCase.execute()

    return response.json(products)
  }
}

export { ListAvailableProductsController }
