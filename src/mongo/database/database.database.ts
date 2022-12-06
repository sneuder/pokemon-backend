import Pokemon from '../models/pokemon.model'

export const postDatabase = (newPokemon: object): void => {
  const postedPokemon = new Pokemon(newPokemon)

  postedPokemon.save()
    .then(r => console.log(r))
    .catch(e => { console.log(e) })
}
