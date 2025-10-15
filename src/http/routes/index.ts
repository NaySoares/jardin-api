import { Router } from 'express'

import { rentalRoutes } from './rental.routes'
import { gardenRoutes } from './garden.routes'
import { productRoutes } from './product.routes'
import { authRoutes } from './auth.routes'

const router = Router()

router.use('/rentals', rentalRoutes)
router.use('/gardens', gardenRoutes)
router.use('/products', productRoutes)
router.use('/auth', authRoutes)

router.get('/', (request, response) => {
  const jsonResponse = {
    message: 'JARDIN-API -> Rotas disponíveis: /rentals, /gardens, /products',
  }
  return response.json(jsonResponse)
})

export { router }
