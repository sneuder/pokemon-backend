import Pokemon from '../models/pokemon.model'
// import { closeMongo } from '../../utils'

export const getAllPokemons = (): void => {
  Pokemon.find({})
    .then(r => console.log(r))
    .catch(e => { throw new Error(e) })
}

export const postPokemon = (): void => {
  const pokemon = new Pokemon({
    name: 'Ospina'
  })

  pokemon.save().then(result => {
    console.log(result)
    // closeMongo()
  }).catch(e => {
    console.log(e)
  })
}
