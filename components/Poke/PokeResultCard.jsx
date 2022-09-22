import Image from "next/image"

const PokeResultCard = ({ pokemon }) => {
    return (
        <div className='bg-white rounded-lg shadow-lg p-4 m-4 grid grid-cols-2'>
            <h1 className='text-center text-3xl font-bold col-span-2 mb-4'>{pokemon.name}</h1>

            <div className=''>
                <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt={pokemon.name} width={300} height={300} loading="lazy" />
                {/* <img className='w-64' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt={pokemon.name} /> */}
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
                <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={150} height={150} loading="lazy" />
                <Image src={pokemon.sprites.back_default} alt={pokemon.name} width={150} height={150} loading="lazy" />
                <Image src={pokemon.sprites.front_shiny} alt={pokemon.name} width={150} height={150} loading="lazy" />
                <Image src={pokemon.sprites.back_shiny} alt={pokemon.name} width={150} height={150} loading="lazy" />
                {/* <img src={pokemon.sprites.front_default} alt={pokemon.name} />

                <img src={pokemon.sprites.back_default} alt={pokemon.name} />

                <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />

                <img src={pokemon.sprites.back_shiny} alt={pokemon.name} /> */}
            </div>
        </div>
    )
}

export default PokeResultCard