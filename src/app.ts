import * as pokemonsRouters from './routes/pokemons.routes'
import express from 'express'

const startApp = (app: any): void => {
  app.use(express.json())
  app.use('/api', pokemonsRouters.router)
}

export default startApp
