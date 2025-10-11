import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { GetProductByIdUseCase } from 'use-cases/products/GetProductByIdUseCase'

class GetProductByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    if (!id) {
      return response.status(400).json({ message: 'ID é obrigatório' })
    }

    const getProductByIdUseCase = container.resolve(GetProductByIdUseCase)

    const product = await getProductByIdUseCase.execute(Number(id))

    return response.json(product)
  }
}

export { GetProductByIdController }
