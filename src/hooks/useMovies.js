import { useCallback, useMemo, useRef, useState } from 'react'
import { searchMovies } from './searchMovies'

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const lastSearch = useRef('')

  const getMovies = useCallback(async ({ search }) => {
    try {
      if (search === lastSearch.current) return
      setLoading(true)
      const response = await searchMovies({ search })
      setMovies(response)
    } catch (error) {
      throw new Error('Error al obtener las peliculas')
    } finally {
      lastSearch.current = search
      setLoading(false)
    }
  }, [])

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies, loading }
}
