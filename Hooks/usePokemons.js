import { useEffect, useState } from "react"
import { getPokemons } from "../services/poke_api"

export const usePokemons = ({ initialState = [], intersectionObserver, nextRoute }) => {
    const [pokemons, setPokemons] = useState(initialState)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const [route, setRoute] = useState(() => {
        if (nextRoute) {
            return nextRoute
        }
        return 'https://pokeapi.co/api/v2/pokemon?limit=50?offset=0'
    })

    const getPokemonsFromApi = () => {
        setLoading(true)
        getPokemons( {url: route} )
            .then(pokemons => {
                setPokemons((prev) => [...prev, ...pokemons.results])
                setRoute(pokemons.next)
                setLoading(false)
            })
            .catch(err => {
                setError(err)
                setLoading(false)
            })
    }

    useEffect(() => {
        if (intersectionObserver) {
            getPokemonsFromApi()
        }

    }, [ intersectionObserver ])

    return { pokemons, loading, error}
}