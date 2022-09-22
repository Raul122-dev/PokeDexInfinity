import PokeCard from "./Poke/PokeCard"

const ListPokemons = ({ pokemons = [] }) => {
    
    // if (isLoading) {
    //     return <p className='text-center'>Cargando...</p>
    // }

    // if (error) {
    //     return <p className='text-center'>Ha ocurrido un error</p>
    // }

    return (
        <div className='w-full grid grid-cols-3 min-h-screen'>

            {pokemons.map(pokemon => (
                <PokeCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
            ))}

        </div>
    )
}

export default ListPokemons