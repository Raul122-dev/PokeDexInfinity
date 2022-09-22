import { useState } from 'react'
import SearchPokemon from '../components/SearchPokemon'
import { useSearchPoke } from '../Hooks/useSearchPoke'
import { useRouter } from 'next/router'
import { getSearchPokemon } from '../services/poke_api'

export async function getServerSideProps( { query }){

    const { name } = query

    try{
        const pokemon = await getSearchPokemon(name)
        return {
            props: {
                pokemonSSR: pokemon,
                name
            }
        }
    }
    catch(err){
        return {
            props: {
                pokemonSSR: null
            }
        }
    }
    // const pokemon = await getSearchPokemon(name)

    // return {
    //     props: {
    //         pokemonSsR: name ? pokemon : null,
    //         name: name || ''
    //     }
    // }
}

export default function Search({ pokemonSsR, name }) {

  const router = useRouter()

  //const {name} = router.query

  const [search, setSearch] = useState(name)

  const handleSearch = (e) => {
    setSearch(e.target.value)
    //add the search to the url
    router.push({
      pathname: '/buscar',
      query: { name: e.target.value }
    })
  }

  const [pokemon, isLoading, error,] = useSearchPoke({name: search, initialState: pokemonSsR})

  return (
    <div className='max-w-7xl m-auto min-h-screen'>
      <div className="text-center mt-10">
        <h1 className='text-4xl font-bold'>Busca el Pokémon que quieras...</h1>
        <div className='my-6 font-semibold'>
          <input type="text" 
            className='w-1/2 p-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500' 
            placeholder='Busca tu Pokémon...'
            onChange={handleSearch}
            value={search} />
        </div>
      </div>

      <SearchPokemon pokemon={pokemon} isLoading={isLoading} error={error} />

      {/* <div className='flex justify-center'>
        {isLoading && <p className='text-center'>Cargando...</p>}
        {error && <p className='text-center'>Ha ocurrido un error</p>}
        {pokemon && (
          <div className='bg-white rounded-lg shadow-lg p-4 m-4 grid grid-cols-2'>
            <h1 className='text-center text-3xl font-bold col-span-2 mb-4'>{pokemon.name}</h1>

            <div className=''>
                <img className='w-64' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt={pokemon.name} />
            </div>

            <div>
              <div className='my-3'>
                <p className='text-center text-xl font-bold'>Habilidades</p>
                <ul>
                  {pokemon.abilities.map(ability => (
                    <li key={ability.ability.name}><b>⩺ </b>{ability.ability.name}</li>
                  ))}
                </ul>
              </div>
              <div className='my-3'>
                <p className='text-center text-xl font-bold'>Stats</p>
                <ul>
                  {pokemon.stats.map(stat => (
                    <li key={stat.stat.name}><b>⩺ {stat.stat.name} </b>: {stat.base_stat}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className='flex flex-wrap justify-center col-span-2'>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />

              <img src={pokemon.sprites.back_default} alt={pokemon.name} />

              <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />

              <img src={pokemon.sprites.back_shiny} alt={pokemon.name} />
            </div>
          </div>
        )}
      </div> */}
    </div>
  )
}
