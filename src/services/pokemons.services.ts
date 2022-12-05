import axios from 'axios'
import { AllPokemons } from '../models/interfaces'

export const getAllPokemons = async (): Promise<void> => {
  const { data } = await axios<AllPokemons>({
    method: 'GET',
    url: 'https://pokeapi.co/api/v2/pokemon?limit=1154',
    headers: {
      'Content-Type': 'application/json',
      'accept-encoding': '*'
    }
  })

  console.log(data)
}
