import { Router } from 'express'
import { auth } from 'lib/auth'
import { fromNodeHeaders } from 'better-auth/node'
import { CreateUserController } from 'http/controllers/users/CreateUserController'

const authRoutes = Router()

const createUserController = new CreateUserController()

authRoutes.get('/api/me', async (req, res) => {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  })
  return res.json(session)
})

authRoutes.post('/signup', createUserController.handle)

export { authRoutes }
