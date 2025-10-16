import { ensureAuthenticated } from '@shared/middlewares/ensureAuthenticated'
import { Router } from 'express'
import { CreateProductController } from 'http/controllers/products/CreateProductController'
import { GetProductByIdController } from 'http/controllers/products/GetProductByIdController'
import { ListAvailableProductsController } from 'http/controllers/products/ListAvailableProductsController'

const productRoutes = Router()

const listAvailableProductsController = new ListAvailableProductsController()
const getProductByIdController = new GetProductByIdController()
const createProductController = new CreateProductController()

productRoutes.get('/', listAvailableProductsController.handle)
productRoutes.get('/:id', getProductByIdController.handle)
productRoutes.post('/', ensureAuthenticated, createProductController.handle)

export { productRoutes }
