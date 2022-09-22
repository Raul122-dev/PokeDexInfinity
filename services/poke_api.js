export const getPokemons = async ({url = 'https://pokeapi.co/api/v2/pokemon?limit=50?offset=0'}) => {
    const res = await fetch(url)
    const data = await res.json()
    return data
}

export const getSearchPokemon = async (name) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data = await res.json()
    return data
}