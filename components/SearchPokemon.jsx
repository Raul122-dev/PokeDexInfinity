import PokeResultCard from "./Poke/PokeResultCard"

const SearchPokemon = ({ pokemon, isLoading, error }) => {

    if( isLoading ) {
        return <p className='text-center'>Cargando...</p>
    }

    if( error ) {
        return <p className='text-center'>No se encontro el Pokemon 😥</p>
    }

    return (
        <div className='flex justify-center'>
            {pokemon && (
            // <div className='bg-white rounded-lg shadow-lg p-4 m-4 grid grid-cols-2'>
            //     <h1 className='text-center text-3xl font-bold col-span-2 mb-4'>{pokemon.name}</h1>

            //     <div className=''>
            //         <img className='w-64' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt={pokemon.name} />
            //     </div>

            //     <div>
            //         <div className='my-3'>
            //             <p className='text-center text-xl font-bold'>Habilidades</p>
            //             <ul>
            //             {pokemon.abilities.map(ability => (
            //                 <li key={ability.ability.name}><b>⩺ </b>{ability.ability.name}</li>
            //             ))}
            //             </ul>
            //         </div>
            //         <div className='my-3'>
            //             <p className='text-center text-xl font-bold'>Stats</p>
            //             <ul>
            //             {pokemon.stats.map(stat => (
            //                 <li key={stat.stat.name}><b>⩺ {stat.stat.name} </b>: {stat.base_stat}</li>
            //             ))}
            //             </ul>
            //         </div>
            //     </div>

            //     <div className='flex flex-wrap justify-center col-span-2'>
            //         <img src={pokemon.sprites.front_default} alt={pokemon.name} />

            //         <img src={pokemon.sprites.back_default} alt={pokemon.name} />

            //         <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />

            //         <img src={pokemon.sprites.back_shiny} alt={pokemon.name} />
            //     </div>
            // </div>
            <PokeResultCard pokemon={pokemon} />
            )}
        </div>
    )
}

export default SearchPokemon