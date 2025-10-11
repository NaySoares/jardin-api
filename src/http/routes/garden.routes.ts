import { Router } from 'express'
import { CreateGardenController } from 'http/controllers/CreateGardenController'
import { GetGardenByIdController } from 'http/controllers/GetGardenByIdController'
import { ListAvailableGardensController } from 'http/controllers/ListAvailableGardensController'

const gardenRoutes = Router()

const listAvailableGardensController = new ListAvailableGardensController()
const getGardenByIdController = new GetGardenByIdController()
const createGardenController = new CreateGardenController()

gardenRoutes.get('/', listAvailableGardensController.handle)
gardenRoutes.get('/:id', getGardenByIdController.handle)

gardenRoutes.post('/', createGardenController.handle)

export { gardenRoutes }
