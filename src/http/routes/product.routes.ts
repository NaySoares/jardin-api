import { Router } from 'express'
import { GetProductByIdController } from 'http/controllers/products/GetProductByIdController'
import { ListAvailableProductsController } from 'http/controllers/products/ListAvailableProductsController'

const productRoutes = Router()

const listAvailableProductsController = new ListAvailableProductsController()
const getProductByIdController = new GetProductByIdController()

productRoutes.get('/', listAvailableProductsController.handle)
productRoutes.get('/:id', getProductByIdController.handle)

export { productRoutes }
