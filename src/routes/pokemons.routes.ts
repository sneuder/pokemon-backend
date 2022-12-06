import { Router } from 'express'
import * as controllers from '../controllers/pokemons.controllers'

export const router = Router()

router.get('/pokemons/allpokemons', controllers.getAllPokemons)
router.post('/pokemons/newpokemon', controllers.postPokemon)
