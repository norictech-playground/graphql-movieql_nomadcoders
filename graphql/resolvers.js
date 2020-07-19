import { movies, getById, addMovie, deleteMovie } from './db.js'

const resolvers = {
  Query: {
    movies: () => movies,
    movie: (_, { id }) => getById(id)
  },
  Mutation: {
    addMovie: (_, { name }) => addMovie(name),
    deleteMovie: (_, { id }) => deleteMovie(id),
  }
};

export default resolvers