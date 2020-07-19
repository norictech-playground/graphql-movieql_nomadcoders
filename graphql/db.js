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

export { 
  movies, 
  getById, 
  deleteMovie 
}