import { useState, useEffect } from 'react'
import { getSearchPokemon } from '../services/poke_api'

export const useSearchPoke = ({ name, initialState }) => {
    const [pokemon, setPokemon] = useState(() => {
        if (initialState) {
            return initialState
        }
        return null
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        if(name){
            setLoading(true)
            getSearchPokemon(name)
                .then(pokemon => {
                    setPokemon(pokemon)
                    setLoading(false)
                    setError(null)
                })
                .catch(err => {
                    setError(err)
                    setLoading(false)
                })
        }
        return () => {
            setPokemon(null)
            setLoading(false)
            setError(null)
        }
    }, [name])


    return [pokemon, loading, error]

}