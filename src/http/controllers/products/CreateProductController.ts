import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateProductUseCase } from 'use-cases/products/CreateProductUseCase'

class CreateProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description, price, stock, type, userId } = request.body
    const createProductUseCase = container.resolve(CreateProductUseCase)

    const product = await createProductUseCase.execute({
      name,
      description,
      price,
      stock,
      type,
      userId,
    })

    return response.status(201).json(product)
  }
}

export { CreateProductController }
