import * as pokemonsRouters from './routes/pokemons.routes'
import * as databaseRouters from './routes/database.routes'

import express from 'express'

const startApp = (app: any): void => {
  app.use(express.json())
  app.use('/api', pokemonsRouters.router)
  app.use('/api', databaseRouters.router)
}

export default startApp
