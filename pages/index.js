import Head from 'next/head'
import ListPokemons from '../components/ListPokemons'
import { getPokemons } from '../services/poke_api'
import { usePokemons } from '../Hooks/usePokemons'
import { useRef } from 'react'
import { useIntersectedView } from '../Hooks/useIntersectorView'
import MetaHead from '../components/MetaHead'
// import styles from '../styles/Home.module.css'

//#1B2631

export async function getServerSideProps(){
    
  const pokemons = await getPokemons({ url: 'https://pokeapi.co/api/v2/pokemon?limit=50?offset=0' })

  return {
      props: {
          pokemonsSSR : pokemons.results,
          nextRoute: pokemons.next
      }
  }
}

export default function Home({pokemonsSSR, nextRoute}) {

  const observerView = useRef()

  const [isVisible] = useIntersectedView(observerView, {
    rootMargin: '500px'
  })

  const { pokemons, loading, error } = usePokemons({initialState: pokemonsSSR, intersectionObserver: isVisible, nextRoute: nextRoute})

  return (
    <div className='w-full min-h-screen pb-20'>
      {/* <Head>
        <title>PokéApi</title>
        <meta name='description" content="Scroll infinito de Pokemons.' />
        <link rel="icon" href="/icons/Poke_Ball_icon.png" />
      </Head> */}

      <MetaHead description='Scroll infinito de Pokemons.'/>

      <div className='max-w-7xl m-auto'>
        <div className="text-center mt-10">
          <h1 className='text-4xl font-bold'>Bienvenido a la PokéApi</h1>
          <p className='my-4 font-semibold'>
            Esta es una aplicación que consume la PokéApi, una API que contiene información de los pokemones.
          </p>
        </div>

        <ListPokemons pokemons={pokemons}/>

        <div ref={observerView} className="w-full bg-black text-white">
          { loading && <p className="text-center py-4">Cargando...</p> }
          { error && <p className="text-center py-4">Error...</p> }
        </div>

      </div>
      
    </div>
  )
}
