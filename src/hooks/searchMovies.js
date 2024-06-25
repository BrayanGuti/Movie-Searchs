const API_KEY = '4287ad07'

export async function searchMovies ({ search }) {
  const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`

  try {
    const response = await fetch(url)
    const json = await response.json()

    const movies = json.Search
    if (json.Response === 'False') return []

    const mappedMives = movies?.map(movie => ({
      title: movie.Title,
      img: movie.Poster,
      year: movie.Year,
      id: movie.imdbID
    }))

    return mappedMives
  } catch (error) {
    throw new Error('Error al obtener las peliculas')
  }
}
