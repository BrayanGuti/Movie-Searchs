function ListOfMovies ({ movies }) {
  return (
    <section className='list-of-movies'>
      {
        movies.map(movie => (
          <div key={movie.id} className='movie'>
            <h3>{movie.title}</h3>
            <img src={movie.img} alt={movie.title} />
            <p>{movie.year}</p>
          </div>
        ))
      }
    </section>
  )
}

function NoMovies () {
  return <p>No se encontraron peliculas</p>
}

export function RenderMovies ({ movies }) {
  const thereIsMovies = movies?.length > 0

  return (
    thereIsMovies
      ? <ListOfMovies movies={movies} />
      : <NoMovies />
  )
}
