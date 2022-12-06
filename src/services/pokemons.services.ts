import * as database from '../mongo/database/pokemon.database'

export const getAllPokemons = (): void => {
  database.getAllPokemons()
}

export const postPokemon = (): void => {
  database.postPokemon()
}
