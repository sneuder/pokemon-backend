import { Request, Response } from 'express'
import * as services from '../services/pokemons.services'

export const getAllPokemons = (_req: Request, res: Response): void => {
  try {
    void services.getAllPokemons()
    res.send('done')
  } catch (e) {
    res.send('sss')
  }
}

export const postPokemon = (_req: Request, res: Response): void => {
  try {
    void services.postPokemon()
    res.send('done')
  } catch (e) {
    res.send('sss')
  }
}
