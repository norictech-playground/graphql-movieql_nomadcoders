const movies = [
  {
    id: "1",
    name: "Naruto",
  },
];

const getById = id => {
  const filteredMovies = movies.filter(movie => movie.id === String(id))
  return filteredMovies[0]
}

const deleteMovie = () => {
  // 
}

const addMovie = (name) => {
  const newMovie = {
    id: `${movies.length} + 1`,
    name
  }
  movies.push(newMovie)
  return newMovie
}

export { 
  movies, 
  getById, 
  deleteMovie,
  addMovie
}