import { Router } from 'express'
import { CreateGardenController } from 'http/controllers/gardens/CreateGardenController'
import { GetGardenByIdController } from 'http/controllers/gardens/GetGardenByIdController'
import { ListAvailableGardensController } from 'http/controllers/gardens/ListAvailableGardensController'

const gardenRoutes = Router()

const listAvailableGardensController = new ListAvailableGardensController()
const getGardenByIdController = new GetGardenByIdController()
const createGardenController = new CreateGardenController()

gardenRoutes.get('/', listAvailableGardensController.handle)
gardenRoutes.get('/:id', getGardenByIdController.handle)

gardenRoutes.post('/', createGardenController.handle)

export { gardenRoutes }
