import { Request, Response, Router } from 'express'

import { rentalRoutes } from './rental.routes'
import { gardenRoutes } from './garden.routes'

const router = Router()

router.use('/rentals', rentalRoutes)
router.use('/gardens', gardenRoutes)

router.get('/', (req: Request, res: Response) => {
  res.send('HOME')
})

export { router }
