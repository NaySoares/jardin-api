import { Request, Response, Router } from 'express'

import { rentalRoutes } from './rental.routes'

const router = Router()

router.use('/rentals', rentalRoutes)

router.get('/', (req: Request, res: Response) => {
  res.send('HOME')
})

export { router }
