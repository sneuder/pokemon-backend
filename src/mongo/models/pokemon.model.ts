import pokemonSchema from '../schemas/pokemon.schema'
import { model } from 'mongoose'

const Pokemon = model('Pokemon', pokemonSchema)

export default Pokemon
