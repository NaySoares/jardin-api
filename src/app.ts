import 'reflect-metadata'
import '@shared/container'

import express, { NextFunction, Request, Response } from 'express'

import { router } from './http/routes'

const app = express()

// Cors
app.use((request: Request, response: Response, next: NextFunction) => {
  response.header('Access-Control-Allow-Origin', '*')
  response.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  )
  next()
})

app.use(express.json())
app.use(router)

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    console.error(err)
    return response.status(500).json({
      status: 'error',
      message: `Internal server error = ${err.message}`,
    })
  },
)

export { app }
