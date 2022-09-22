import Image from "next/image"

const PokeCard = ({ name, url }) => {
    return (
        <div className='bg-white rounded-lg shadow-lg p-4 m-4'>
            <p className='text-center text-xl font-bold'>{name}</p>

            <div className='flex justify-center'>
                <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${url.split('/')[6]}.png`} alt={name} width={200} height={200} loading="lazy" />

                {/* <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${url.split('/')[6]}.png`} alt={name} /> */}
            </div>
        </div>
    )
}

export default PokeCard