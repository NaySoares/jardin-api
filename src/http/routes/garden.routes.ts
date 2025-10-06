import { Router } from 'express'
import { GetGardenByIdController } from 'http/controllers/GetGardenByIdController'
import { ListAvailableGardensController } from 'http/controllers/ListAvailableGardensController'

const gardenRoutes = Router()

const listAvailableGardensController = new ListAvailableGardensController()
const getGardenByIdController = new GetGardenByIdController()

gardenRoutes.get('/', listAvailableGardensController.handle)
gardenRoutes.get('/:id', getGardenByIdController.handle)

export { gardenRoutes }
