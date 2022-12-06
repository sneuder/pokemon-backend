import axios from 'axios'
import { AllPokemons } from '../models/interfaces'
import * as database from '../mongo/database/database.database'

export const postDatabase = (): void => {
  axios<AllPokemons>({
    method: 'GET',
    url: 'https://pokeapi.co/api/v2/pokemon?limit=1154',
    headers: {
      'Content-Type': 'application/json',
      'accept-encoding': '*'
    }
  })
    .then(response => {
      const { results } = response.data
      results.forEach(result => database.postDatabase(result))
    })
    .catch(err => {
      throw new Error(err)
    })
}

export const deleteDatabase = (): void => {

}
