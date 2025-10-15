import { Router } from 'express'
import { auth } from 'lib/auth'
import { fromNodeHeaders } from 'better-auth/node'
import { CreateUserController } from 'http/controllers/users/CreateUserController'
import { AuthenticateUserController } from 'http/controllers/users/AuthenticateUserController'
import { RefreshTokenController } from 'http/controllers/users/RefreshTokenController'

const authRoutes = Router()

const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()
const refreshTokenController = new RefreshTokenController()

authRoutes.get('/api/me', async (req, res) => {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  })
  return res.json(session)
})

authRoutes.post('/signup', createUserController.handle)
authRoutes.post('/sessions', authenticateUserController.handle)
authRoutes.post('/refresh', refreshTokenController.handle)
export { authRoutes }
