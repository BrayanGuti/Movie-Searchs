import { RenderMovies } from './components/RenderMovies'
import { useState, useRef, useEffect, useCallback } from 'react'
import { useMovies } from './hooks/useMovies'
import debounce from 'just-debounce-it'

import './App.css'

function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(false)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('No se puede buscar una película vacía')
    } else if (search.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número')
    } else if (search.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
    } else {
      setError(false)
    }
  }, [search])
  return { search, setSearch, error }
}

function App () {
  const inputRef = useRef()
  const [sort, setSort] = useState(false)
  const { search, setSearch, error } = useSearch()

  const { movies, getMovies, loading } = useMovies({ search, sort })

  const debounceGetMovies = useCallback(debounce(search => {
    getMovies({ search })
  }, 700), [])

  function handleChange (e) {
    const value = e.target.value
    setSearch(value)
    debounceGetMovies(value)
  }

  function onSubmit (e) {
    e.preventDefault()
    getMovies({ search })
  }

  function handleCheck () {
    setSort(!sort)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de Peliculas</h1>
        <form onSubmit={onSubmit} className='form' action="">
          <label htmlFor="nav">¡Escribe aqui tu pelicula! </label>
          <div className='search-bar'>
            <input onChange={handleChange} ref={inputRef} value={search} id='nav' placeholder='Avengers, The Matrix, Hunger Games...' />
            <input onChange={handleCheck} checked={sort} type="checkbox" name="" id="" />
            <button type='submit'>Buscar</button>
          </div>
        </form>
        { error && <p>{error}</p> }
      </header>

      <main >
        {
          loading
            ? <p>Cargando...</p>
            : <RenderMovies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App
