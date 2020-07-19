let movies = [
  {
    id: "1",
    name: "Naruto",
  },
];

const getById = id => {
  const filteredMovies = movies.filter(movie => movie.id === String(id))
  return filteredMovies[0]
}

const addMovie = (name) => {
  const newMovie = {
    id: movies.length + 1,
    name
  }
  movies.push(newMovie)
  return newMovie
}

const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== id)
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies
    return true
  } return false
}

export { 
  movies, 
  getById, 
  addMovie,
  deleteMovie,
}