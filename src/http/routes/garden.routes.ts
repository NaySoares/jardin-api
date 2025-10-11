import { Router } from 'express'
import { GetProductByIdController } from 'http/controllers/GetProductByIdController'
import { ListAvailableProductsController } from 'http/controllers/ListAvailableProductsController'

const gardenRoutes = Router()

const listAvailableProductsController = new ListAvailableProductsController()
const getProductByIdController = new GetProductByIdController()

gardenRoutes.get('/', listAvailableProductsController.handle)
gardenRoutes.get('/:id', getProductByIdController.handle)

export { gardenRoutes }
