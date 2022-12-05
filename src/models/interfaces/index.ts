interface Pokemons {
  name: string
  url: string
}

export interface AllPokemons {
  count: number
  next: string | null
  previous: string | null
  results: Pokemons[]
}
