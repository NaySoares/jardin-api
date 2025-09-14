import { Router } from 'express'
import { ListAvailableGardensController } from 'http/controllers/ListAvailableGardensController'

const gardenRoutes = Router()

const listAvailableGardensController = new ListAvailableGardensController()

gardenRoutes.get('/', listAvailableGardensController.handle)

export { gardenRoutes }
